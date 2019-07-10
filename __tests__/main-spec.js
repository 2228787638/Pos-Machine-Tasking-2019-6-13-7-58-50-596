const {happenError,printReceipt,getBarcodesAndCount,getReceiptData,getReceiptsDetail,renderReceiptsDetail,renderTotalPrice} = require('../main');

it ('happenError', () => {
    expect(happenError(['==', '0003', '0005', '0003'])).toEqual(true);
});
it ('not happenError', () => {
    expect(happenError(['0001', '0003', '0005', '0003'])).toEqual(false);
});

it ('printReceipt', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toEqual(`Receipts
------------------------------------------------------------
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
------------------------------------------------------------
Price: 20`);
});

it ('have happend error printReceipt', () => {
    expect(printReceipt(['==', '0003', '0005', '0003'])).toEqual(`[ERROR]:`);
});

it ('getBarcodesAndCount', () => {
    expect(getBarcodesAndCount(['0001', '0003', '0005', '0003'])).toEqual([{'id':'0001','count':1},{'id':'0003','count':2},{'id':'0005','count':1}]);
});

it ('getReceiptData', () => {
    expect(getReceiptData()).toEqual([
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
	]);
});

it ('getReceiptsDetail', () => {
    expect(getReceiptsDetail([{'id':'0001','count':1},{'id':'0003','count':2},{'id':'0005','count':1}])).toEqual([
    {"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}
	]);
});

it ('renderReceiptsDetail', () => {
    expect(renderReceiptsDetail([
    {"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}
	])).toEqual(`Receipts
------------------------------------------------------------
Coca Cola 3 1
Pepsi-Cola 5 2
Dr Pepper 7 1
------------------------------------------------------------`);
});

it ('renderTotalPrice', () => {
    expect(renderTotalPrice([
    {"id": "0001", "name" : "Coca Cola", "price": 3,"count": 1},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"count": 2},
    {"id": "0005", "name" : "Dr Pepper", "price": 7,"count": 1}
	])).toEqual(`Price: 20`);
});