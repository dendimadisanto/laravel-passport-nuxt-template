<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Warga;
use File;
use Validator;


class WargaController extends Controller
{
    //index
    public function index(Request $request){
        try{

            if($request->input('id')){
              $res['data'] = Warga::where('WARGA_ID','=',$request->input('id'))->first();
              return json_encode($res);
            }
            else{
              $search = $request->input('search');
              $warga = new Warga();

              if($search){
                $warga = $warga->orWhere('NIK','like','%'.$search.'%')->orWhere('NAMA','like','%'.$search.'%');
              }

              $data = $warga->paginate(10);
              return $data;
            }
            

        }catch(\Exception $e){
            return "Sedang ada Perbaikan";
        }
        
    }

    //tambah data warga
    public function create(request $request, Warga $warga){
        try {


            $valid = $this->validate($request, [
                'FOTO' => 'nullable|sometimes|mimes:jpeg,png,jpg|max:2048',
                'NIK'  => 'unique:warga,NIK|digits_between:2,20'
            ]);
              // menyimpan data file yang diupload ke variabel $file
              $file = $request->file('FOTO');
              $nama_file = null;
              if ($file){
                  $nama_file = date('yymd')."_".$file->hashName();
                  // isi dengan nama folder tempat kemana file diupload
                  $tujuan_upload = 'foto';
                  $file->move($tujuan_upload,$nama_file);
              }
              $warga->insert([
                  'NIK'             => $request->NIK,
                  'NO_KK'           => $request->NO_KK,
                  'NAMA'            => $request->NAMA,
                  'JENIS_KELAMIN'   => $request->JENIS_KELAMIN,
                  'TEMPAT_LAHIR'    => $request->TEMPAT_LAHIR,
                  'TANGGAL_LAHIR'   => $request->TANGGAL_LAHIR,
                  'AGAMA_ID'        => $request->AGAMA_ID,
                  'HUB_ID'          => $request->HUB_ID,
                  'PEKERJAAN'       => $request->PEKERJAAN,
                  'ALAMAT'          => $request->ALAMAT,
                  'RT_ID'           => $request->RT_ID,
                  'RW_ID'           => $request->RW_ID,
                  'FOTO'            => $nama_file,
                  'CLIENT_ID'       => $request->CLIENT_ID
              ]);
              return "Data Berhasil Disimpan";    

        }catch(\Exception $e){
            dd($e);
            //return response()->json(['a' => $e]);
        }
		
    }
    // edit data warga
    public function update(request $request,Warga $warga,$WARGA_ID){
        $this->validate($request, [
           'FOTO' => 'nullable|sometimes|mimes:jpeg,png,jpg|max:2048',
           'NIK'  => 'required'
		]);
        // foto old di hapus
        $foto = $warga->where('WARGA_ID',$WARGA_ID)->first();
		File::delete('foto/'.$foto->FOTO);
		// foto new
		$file = $request->file('FOTO');
        $nama_file = null;
        if ($file){
            $nama_file = date('yymd')."_".$file->hashName();
            // isi dengan nama folder tempat kemana file diupload
            $tujuan_upload = 'foto';
		    $file->move($tujuan_upload,$nama_file);
        }
        $warga->where('WARGA_ID',$request->WARGA_ID)->update([
            'NIK'             => $request->NIK,
            'NO_KK'           => $request->NO_KK,
            'NAMA'            => $request->NAMA,
            'JENIS_KELAMIN'   => $request->JENIS_KELAMIN,
            'TEMPAT_LAHIR'    => $request->TEMPAT_LAHIR,
            'TANGGAL_LAHIR'   => $request->TANGGAL_LAHIR,
            'AGAMA_ID'        => $request->AGAMA_ID,
            'HUB_ID'          => $request->HUB_ID,
            'PEKERJAAN'       => $request->PEKERJAAN,
            'ALAMAT'          => $request->ALAMAT,
            'RT_ID'           => $request->RT_ID,
            'RW_ID'           => $request->RW_ID,
            'FOTO'            => $nama_file,
            'CLIENT_ID'       => $request->CLIENT_ID
        ]);

        return "Data Berhasil Diubah";

    }
    
    //hapus data warga
    public function delete(Warga $warga,$WARGA_ID){
        // hapus FOTO
        $foto = $warga->where('WARGA_ID',$WARGA_ID)->first();
		File::delete('foto/'.$foto->FOTO);

        // hapus Data    
        $warga->where('WARGA_ID',$WARGA_ID)->delete();

        return "Data Berhasil Di Hapus";
    }    

}
