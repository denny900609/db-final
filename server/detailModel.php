<?php
require_once './mysql.inc.php';

class detailModel{
    public function getAllorders($OrderId){
        $sql = "SELECT  *  
        FROM  `orderdetail` 
        WHERE orderdetail.OrderId = ?
        ORDER BY orderdetail.seq ASC";
        $response = Mysql::select($sql, array($OrderId));
        return $response;
    }
    public function getorder($seq){
        $sql = "SELECT  *  FROM  `orderdetail` WHERE `seq`=?";
        $response = Mysql::select($sql, array($seq));
        return $response;
    }
    public function neworder($OrderId, $ProdId, $Qty, $Discount){
        $sql = "INSERT INTO `orderdetail` (`OrderId`, `ProdId`, `Qty`, `Discount`) VALUES (?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($OrderId, $ProdId, $Qty, $Discount));
        return $response;
    }
    public function deleteorder($seq){
        $sql = "DELETE FROM `orderdetail` WHERE `seq`=?";
        $response = Mysql::delete($sql, array($seq));
        return $response;
    }
    public function updateorder($seq, $OrderId, $ProdId, $Qty, $Discount){
        $sql = "UPDATE `orderdetail` SET seq=?, `OrderId`=?, `ProdId`=?, `Qty`=?, `Discount`=? WHERE seq=?";
        $response = Mysql::update($sql, array($seq, $OrderId, $ProdId, $Qty, $Discount, $seq));
        return $response;
    }
}

?>