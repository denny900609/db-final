<?php
require_once "./mysql.inc.php";
require_once "./LoginController.php";

class Main
{
    static function run()
    {
        $jsonString = file_get_contents('config.json');
        $config = json_decode($jsonString, true);
        Mysql::$dbHost = $config['db']['dbHost'];
        Mysql::$dbName = $config['db']['dbName'];
        Mysql::$dbUser = $config['db']['dbUser'];
        Mysql::$dbPassword = $config['db']['dbPassword'];

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
            if (isset($_GET['choose']))
                $choose = $_GET['choose'];
        } else
            $action = 'default_action';

        $lc = new LoginController();
        $response = $lc->checkToken();
        $refreshjwt = $response['jwt'];
        $Auth = $response['result'];

        if ($response['status'] == "401") {
            //沒有登入的情況下可能產生的各種action
            switch ($action) {
                case 'DoLogin':
                    $response = $lc->doLogin();
                    break;
                default:
                    break;
            }
        } else if(isset($choose)){
            global $controller;

            if ($choose == 'product') 
            {
                require_once "./ProductController.php";
                $controller = new ProductController();
            } 
            else if ($choose == 'member') 
            {
                require_once "./MemberController.php";
                $controller = new MemberController();
            }
            else if ($choose == 'sale') 
            {
                require_once "./SaleController.php";
                $controller = new saleController();
            }
            else if ($choose == 'order') 
            {
                require_once "./OrderController.php";
                $controller = new orderController();
            }
            else if ($choose == 'detail') 
            {
                require_once "./detailController.php";
                $controller = new detailController();
            }
            else if ($choose == 'customer') 
            {
                require_once "./customerController.php";
                $controller = new customerController();
            }
            
            switch ($action) {
                case 'DoSelectAction':
                    if($Auth <20)
                        $response = $controller->doSelectAction();
                    else
                        $response = Mysql::response(202, '權限不足');
                    break;
                case 'DoInsertAction':
                    if($Auth <10)
                        $response = $controller->doInsertAction();
                    else
                        $response = Mysql::response(202, '權限不足');
                    break;
                case 'DoUpdateAction':
                    if($Auth <10)
                        $response = $controller->doUpdateAction();
                    else
                        $response = Mysql::response(202, '權限不足');
                    break;
                case 'DoDeleteAction':
                    if($Auth <10)
                        $response = $controller->doDeleteAction();
                    else
                        $response = Mysql::response(202, '權限不足');
                    break;
                default:
                    $response['status'] = 404;
                    $response['message'] = "action not found";
                    break;
            }

            $response['jwt'] = $refreshjwt;
        }
        echo json_encode($response);
    }
}
