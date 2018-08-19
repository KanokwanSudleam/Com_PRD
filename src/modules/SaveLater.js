import axios from 'axios';
import Username from './Username.js';
import ContactID from './ContactID'

var fieldValues = {
    ticketid :'',
    status : '',
    contactid : ContactID.getContactID(),
    accountid: '',
    accountname : '',
    category   : "ร้องเรียน",
    subcate1 : '',
    subcate2 : '',
    subcate3 : '',
    channel : "9.Mobile App",
    productname : '',
    productprice : '',
    purchasedate : '',
    payment : '',
    purchase : '',
    website : '',
    store : '',
    problem : '',
    damage : '',
    desc : '',
    new_request : '',
    newaccount : '',
    ownerid : '',
    state : null,
    name     : Username.getUsername(),
  }
class Save{

    static saveLater(field_value){
        console.log("sendForm"+field_value);
        console.log(field_value);
        fieldValues = Object.assign({}, fieldValues, field_value)
        var getURL = "https://cryptic-headland-94862.herokuapp.com/"+window.env.API_URL+"?function=UpdateNewTicket&ticketid="
        // if(fieldValues.accountname == "-- ไม่ระบุคู่กรณี --"){
        //     var URL = getURL+fieldValues.ticketid+"&status=Open"+"&contactid="+fieldValues.contactid+"&title="+fieldValues.accountname+fieldValues.subcate2+
        //     "&accountid=11x150386"+"&accountname="+fieldValues.accountname+"&category="+fieldValues.category+
        //     "&subcate1="+fieldValues.subcate1+"&subcate2="+fieldValues.subcate2+"&subcate3="+fieldValues.subcate3+
        //     "&channel="+fieldValues.channel+"&productname="+fieldValues.productname+"&productprice="+fieldValues.productprice+
        //     "&purchasedate="+fieldValues.purchasedate+"&payment="+fieldValues.payment+"&purchase="+fieldValues.purchase
        //     +"&website="+fieldValues.website+"&store="+fieldValues.store+"&problem="+fieldValues.problem+"&damage="+fieldValues.damage+"&desc="+fieldValues.newaccount+ "-"+fieldValues.desc+
        //     "&request="+fieldValues.new_request+"&ownerid=1x1"

        // }else{
            var URL = getURL+fieldValues.ticketid+"&status=Open"+"&contactid="+fieldValues.contactid+"&title="+fieldValues.accountname+fieldValues.subcate2+
            "&accountid="+fieldValues.accountid+"&accountname="+fieldValues.accountname+"&category="+fieldValues.category+
            "&subcate1="+fieldValues.subcate1+"&subcate2="+fieldValues.subcate2+"&subcate3="+fieldValues.subcate3+
            "&channel="+fieldValues.channel+"&productname="+fieldValues.productname+"&productprice="+fieldValues.productprice+
            "&purchasedate="+fieldValues.purchasedate+"&payment="+fieldValues.payment+"&purchase="+fieldValues.purchase
            +"&website="+fieldValues.website+"&store="+fieldValues.store+"&problem="+fieldValues.problem+"&damage="+fieldValues.damage+"&desc="+fieldValues.desc+
            "&request="+fieldValues.new_request+"&ownerid=1x1"
        // }
        console.log("Save URL"+URL)
        axios
        .get(URL)
        .then(response => {
            console.log("Save res"+JSON.stringify(response))

            return window.location = window.location.origin;

        })
        .catch(error => {
            console.log(error)
            return error
        });
        
        }
}
export default Save;