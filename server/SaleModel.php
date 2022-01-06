<?php
require_once './mysql.inc.php';

class saleModel{
    public function getAllsales($date1, $date2){
        $sql = "SELECT customer.CustName as 客戶名稱, customer.CustId as 客戶代號, orderdetail.Qty*product.UnitPrice*orderdetail.Discount as 訂單總銷售金額, orderdetail.Qty*(product.UnitPrice*orderdetail.Discount-product.Cost) as 訂單總利潤
        FROM customer, salesorder, orderdetail, product
        WHERE	customer.CustId = salesorder.CustId
            AND	salesorder.OrderId = orderdetail.OrderId
            AND	orderdetail.ProdId = product.ProdID
            AND salesorder.OrderDate BETWEEN ? AND ?
            GROUP BY 客戶名稱, 客戶代號
            ORDER BY 訂單總利潤 DESC";
        $response = Mysql::select($sql, array($date1, $date2));
        return $response;
    }
    public function getsale($orderid){
        $sql = "SELECT  *  FROM  `salesorder` WHERE `orderid`=?";
        $response = Mysql::select($sql, array($orderid));
        return $response;
    }
    public function newsale($orderid, $id, $date){
        $sql = "INSERT INTO `salesorder` (`orderid`, `id`, `date`) VALUES (?, ?, ?)";
        $response = Mysql::insert($sql, array($orderid, $id, $date));
        return $response;
    }
    public function deletesale($orderid){
        $sql = "DELETE FROM `salesorder` WHERE `orderid`=?";
        $response = Mysql::delete($sql, array($orderid));
        return $response;
    }
    public function updatesale($orderid, $id, $date){
        $sql = "UPDATE `salesorder` SET `id`=?, `date`=? WHERE orderid=?";
        $response = Mysql::update($sql, array($id, $date, $orderid));
        return $response;
    }
}

?>