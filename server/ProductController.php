<?php
require_once './ProductModel.php';
require_once './Controller.php';
class ProductController extends Controller
{
    
    public function DoSelectAction()
    {
        $sm = new ProductModel();
        if(isset($_GET['choicetype'])){
            if(($_GET['choicetype'])=="ProdID"){
            $response = $sm->getIdProduct($_GET['keyword']);
            }
            else if (($_GET['choicetype'])=="ProdName"){
                $response = $sm->getNameProduct($_GET['keyword']);
            }
            else if (($_GET['choicetype'])=="UnitPrice"){
                $response = $sm->getUnitPriceProduct($_GET['keyword']);
            }
            else if (($_GET['choicetype'])=="Cost"){
                $response = $sm->getCostProduct($_GET['keyword']);
            }
        }
        else if (isset($_POST['id'])){
            $response = $sm->getIdProduct($_POST['id']);
        }
        else{
            $response = $sm->getAllproducts();
        }
        return $response;
    }

    public function DoDeleteAction()
    {
        $id = $_POST['id'];
        $sm = new ProductModel();
        $response = $sm->deleteproduct($id);
        return $response;
    }
    public function DoInsertAction()
    {
        $id = $_POST['ProdID'];
        $name = $_POST['ProdName'];
        $price = $_POST['UnitPrice'];
        $kcal = $_POST['Cost'];

        $sm = new ProductModel();
        $response = $sm->newproduct($id, $name, $price, $kcal);
        return $response;
    }
    public function DoUpdateAction()
    {
        $ProdID = $_POST['ProdID'];
        $ProdName = $_POST['ProdName'];
        $UnitPrice = $_POST['UnitPrice'];
        $Cost = $_POST['Cost'];

        $sm = new ProductModel();
        $response = $sm->updateproduct($ProdID, $ProdName, $UnitPrice, $Cost);
        return $response;
    }
}
?>