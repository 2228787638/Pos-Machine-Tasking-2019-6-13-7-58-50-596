const happenError = barcodes =>{
	for(const barcode of barcodes){
		if(barcode=='=='){
			return true;
		}
	}
	return false;
}
const printReceipt = barcodes => {
	//have not error
	if(!happenError(barcodes)){
		const receiptsDetail=getReceiptsDetail(getBarcodesAndCount(barcodes));
		return renderReceiptsDetail(receiptsDetail)+"\n"+renderTotalPrice(receiptsDetail);
	}else{
		return "[ERROR]:";
	}
}

const getBarcodesAndCount = barcodes => {
	const idAndCountMap = new Map();
	const items=new Array();
	
	for(const barcode of barcodes){
		idAndCountMap.set(barcode,idAndCountMap.get(barcode)+1||1);
	}
			 
	for(const idAndCount of idAndCountMap){
		const order={};
		order.id=idAndCount[0];
		order.count=idAndCount[1];
		items.push(order);
	}
	return items;
}

const getReceiptData = () =>{
	return [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
	];
}

const getReceiptsDetail = barcodesAndCount =>{
	const receiptData = getReceiptData();

	const receiptsDetailAndCount = new Array();
	for(const barcode of barcodesAndCount){
		for(const receipts of receiptData){
			if(barcode.id==receipts.id){
				const order = {...receipts, count: barcode.count};
				receiptsDetailAndCount.push(order);
			}
		}
	}
	return receiptsDetailAndCount;
}

const renderReceiptsDetail = receiptsDetailAndCount =>{
	let receiptsDetail =`Receipts
------------------------------------------------------------\n`;
	for(const receiptsd of receiptsDetailAndCount){
		receiptsDetail+=`${receiptsd.name} ${receiptsd.price} ${receiptsd.count}\n`;

	}
	receiptsDetail+=`------------------------------------------------------------`;
	return receiptsDetail;
}
const renderTotalPrice = receiptsDetailAndCount =>{
	let receiptsTotalPrice = ``;
	let totalPrice = 0;
	for(const receiptsd of receiptsDetailAndCount){
		totalPrice+=receiptsd.count*receiptsd.price;
	}
	return `Price: ${totalPrice}`
}


module.exports = {happenError,printReceipt,getBarcodesAndCount,getReceiptData,getReceiptsDetail,renderReceiptsDetail,renderTotalPrice};