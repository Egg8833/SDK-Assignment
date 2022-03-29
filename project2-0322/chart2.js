// const bigData =require('./data');
import {bigData} from './data.js'

console.log(bigData);

let objName =[
  {
    num:1,
    name:'3month_Tbill'
  }, 
  {
    num:2,
    name:'5year_Tnote'
  }, 
  {
    num:3,
    name:'10year_Tbond'
  },
   {
    num:4,
    name:'EuropeETF_VGK'
  }, 
  {
    num:5,
    name:'EuropeETF_BBEU'
  },
   {
    num:6,
    name:'EuropeETF_EZU'
  },
  {
    num:7,
    name:'3monthGovernmentBond_Mexican'
  },
  {
    num:8,
    name:'3monthGovernmentBond_Brazil'
  },
  {
    num:9,
    name:'DJCI_Gas'
  },
  {
    num:10,
    name:'DJCI_Gold'
  },
  {
    num:11,
    name:'DJCI_Oil'
  },
  {
    num:12,
    name:'LowCarbonStock_TESLA'
  },
  {
    num:13,
    name:'LowCarbonStock_NVIDIA'
  },
  {
    num:14,
    name:'LowCarbonStock_HOMEDEPOT'
  },
  {
    num:15,
    name:'conversion_rate'
  },
  {
    num:16,
    name:'China_growthGDP'
  }
]

// ------   第二題

var togetherData=[];

 function dataRender(number){
  let newName =objName[number-1].name 
  let subNum=[]
  async function abc(){
    if(number <4){
 
    let someData=bigData.reverse().map((item,index,array)=>{
      let firstNum =item[newName];
      let secondNum =array[index+1]?.[newName];
      let newFirst =firstNum.split('%')[0]
      let newsecond =secondNum?.split('%')[0]
      let sub =[(newsecond-newFirst).toFixed(2)+'%',index+1]
  
      return subNum.push(sub)
    })
    }else if(number ==4 ||number == 5 ||number == 6 ||number == 9 ||number == 10 ||number == 11 || number ==12 ||number == 13 || number ==14 || number ==15){
    
      let someData=bigData.reverse().map((item,index,array)=>{
        let firstNum =item[newName];
        let secondNum =array[index+1]?.[newName];
        let sub =[(secondNum-firstNum).toFixed(2),index+1]
         return subNum.push(sub)
      })
    }
    else if(number ==7 ||number == 8 || number ==16 ){
    
      let someData=bigData.reverse().map((item,index,array)=>{
        let firstNum =item[newName];
        let secondNum =array[index+1]?.[newName];
        let newFirst =firstNum.split('%')[0]
        let newsecond =secondNum?.split('%')[0]
        let sub =[(newsecond-newFirst).toFixed(2)+'%',index+1]
    
        return subNum.push(sub)
      })
    }
  }
  abc();
  
  // 各別拉出時間點
  let dateData =[]
  bigData.forEach((item)=>{
    dateData.push(item.TimeStamp)
  })
  
  // 刪除第一筆時間
  dateData.shift() 
  // 把資料加入時間點 
  for(let i=0;i<99;i++){
    subNum[i].push(dateData[i])
  
  }
 
  // 手動加入第一筆資料
  let firstdata=[]
  firstdata.push(bigData[0][newName],0,bigData[0]["TimeStamp"])
  subNum.unshift(firstdata)
  // 推入第一筆手動資料
  
  subNum.pop();
  // 刪除最後一筆NaN資料
  
  // 寫進集合物件裡面
  subNum.forEach((item,index)=>{
  switch (number){  
      case 1:
      togetherData.push({
        'TimeStamp':item[2],
        '3month_Tbill':item[0] ,
        "10year_Tbond":'',
        "5year_Tnote": '',
        "10year_Tbond":'' ,
        "EuropeETF_VGK":'',
        "EuropeETF_BBEU":'',
        "EuropeETF_EZU":'',
        "3monthGovernmentBond_Mexican": '',
        "3monthGovernmentBond_Brazil":'',
        "DJCI_Gas":'',
        "DJCI_Gold":'',
        "DJCI_Oil": '',
        "LowCarbonStock_TESLA":'',
        "LowCarbonStock_NVIDIA": '',
        "LowCarbonStock_HOMEDEPOT":'',
        "conversion_rate":'',
        "China_growthGDP": '',
      })
      break;
      case 2:
        togetherData[index]['5year_Tnote']=item[0] 
        break;  
      case 3:
        togetherData[index]['10year_Tbond']=item[0]  
        break;   
      case 4:
        togetherData[index]['EuropeETF_VGK']=item[0]
        break;   
      case 5:
        togetherData[index]['EuropeETF_BBEU']=item[0]
        break;  
      case 6:
        togetherData[index]['EuropeETF_EZU']=item[0]
        break;   
      case 7:
        togetherData[index]['3monthGovernmentBond_Mexican']=item[0] 
        break;  
      case 8:
        togetherData[index]['3monthGovernmentBond_Brazil']=item[0]  
        break;   
      case 9:
        togetherData[index]['DJCI_Gas']=item[0]
        break;   
      case 10:
        togetherData[index]['DJCI_Gold']=item[0]
        break;  
      case 11:
        togetherData[index]['DJCI_Oil']=item[0]
        break;   
      case 12:
        togetherData[index]['LowCarbonStock_TESLA']=item[0]
        break;   
      case 13:
        togetherData[index]['LowCarbonStock_NVIDIA']=item[0] 
        break;  
      case 14:
        togetherData[index]['LowCarbonStock_HOMEDEPOT']=item[0]  
        break;   
      case 15:
        togetherData[index]['conversion_rate']=item[0]
        break;   
      case 16:
        togetherData[index]['China_growthGDP']=item[0]
        break;  
  }
  })
 }

 for(let i=1 ;i<17 ;i++){
  dataRender(i);
 }
  console.log(togetherData);
  













