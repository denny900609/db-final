<?php
abstract class Controller {
	protected function response($status, $message, $result = null, $jwt = null, $userinfo = null)
    {
        $resp['status'] = $status;
        $resp['message'] = $message;
        $resp['result'] = $result;
        $resp['jwt'] = $jwt;
        $resp['userinfo'] = $userinfo;
        return $resp;
    }
}
