<?php
require_once './mysql.inc.php';

class customerModel{
    public function getAllcustomers(){
        $sql = "SELECT  *  FROM  `customer`";
        $response = Mysql::select($sql);
        return $response;
    }
    public function getcustomer($id){
        $sql = "SELECT  *  FROM  `customer` WHERE `CustId`=?";
        $response = Mysql::select($sql, array($id));
        return $response;
    }
    public function newcustomer($id, $name, $UnitPrice, $Cost){
        $sql = "INSERT INTO `customer` (`ProdID`, `ProdName`, `UnitPrice`, `Cost`) VALUES (?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($id, $name, $UnitPrice, $Cost));
        return $response;
    }
    public function deletecustomer($id){
        $sql = "DELETE FROM `customer` WHERE `ProdID`=?";
        $response = Mysql::delete($sql, array($id));
        return $response;
    }
    public function updatecustomer($id, $name, $UnitPrice, $Cost){
        $sql = "UPDATE `customer` SET `ProdID` = ?, `ProdName`=?, `UnitPrice`=?, `Cost`=? WHERE ProdID=?";
        $response = Mysql::update($sql, array($id, $name, $UnitPrice, $Cost, $id));
        return $response;
    }
}

?>