<?php
require_once './mysql.inc.php';

class productModel{
    public function getAllproducts(){
        $sql = "SELECT  *  FROM  `product`";
        $response = Mysql::select($sql);
        return $response;
    }
    public function getIdProduct($id){
        $sql = 'SELECT * FROM `product` WHERE `ProdID` = ? ';
        $response = Mysql::select($sql,array($id));
        return $response;
    }
    public function getNameProduct($name){
        $sql = 'SELECT  *  FROM  `product` WHERE `ProdName` = ? ';
        $response = Mysql::select($sql, array($name));
        return $response;
    }
    public function getUnitPriceProduct($UnitPrice){
        $sql = 'SELECT  *  FROM  `product` WHERE `UnitPrice` = ? ';
        $response = Mysql::select($sql, array($UnitPrice));
        return $response;
    }
    public function getCostProduct($Cost){
        $sql = 'SELECT  *  FROM  `product` WHERE `Cost` = ? ';
        $response = Mysql::select($sql, array($Cost));
        return $response;
    }
    
    public function newproduct($id, $name, $UnitPrice, $Cost){
        $sql = "INSERT INTO `product` (`ProdID`, `ProdName`, `UnitPrice`, `Cost`) VALUES (?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($id, $name, $UnitPrice, $Cost));
        return $response;
    }
    public function deleteproduct($id){
        $sql = "DELETE FROM `product` WHERE `ProdID`=?";
        $response = Mysql::delete($sql, array($id));
        return $response;
    }
    public function updateproduct($id, $name, $UnitPrice, $Cost){
        $sql = "UPDATE `product` SET `ProdID` = ?, `ProdName`=?, `UnitPrice`=?, `Cost`=? WHERE ProdID=?";
        $response = Mysql::update($sql, array($id, $name, $UnitPrice, $Cost, $id));
        return $response;
    }
}

?>