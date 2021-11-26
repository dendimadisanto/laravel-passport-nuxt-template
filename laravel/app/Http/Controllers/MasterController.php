<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agama;
use App\Models\Hubungan;
use File;
use Validator;
use App\GlobalClass\Response;


class MasterController extends Controller
{
	public function getAgama(Request $request){
        try{
        	$agama = Agama::all();
        	$response = new Response(200,'Berhasil di dapat',$agama,[]);

        	return $response->getResponse();

        }catch(\Exception $e){
        	$response = new Response(200,'Ada kesalahan server',[],$e->getMessage());
            return $response->getResponse();
        }
        
    }

    public function getHubungan(Request $request){
        try{
        	$hubungan = Hubungan::all();
        	$response = new Response(200,'Berhasil di dapat',$hubungan,[]);

        	return $response->getResponse();

        }catch(\Exception $e){
        	$response = new Response(200,'Ada kesalahan server',[],$e->getMessage());
            return $response->getResponse();
        }
        
    }
}

?>