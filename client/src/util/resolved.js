import _ from 'lodash';


//Pure function to get deep nesting array with 'li' html element
export const getResolvedArray = (o)=>{
    let html='';
    _.forEach(o,v=>{
        let value = ''
        if( _.isArray(v)){
            value+=getResolvedArray(v);
        }else if(_.isPlainObject(v) && !_.isEmpty(v)){
            value+=getResolvedObject(v);
        }
        else{
            value=v;
        }
        html+=`<li>${value}</li>`;
    })
    return html;
}

//Pure function to get nesting object data with 'div' element; 
export const getResolvedObject = (o)=>{
    let html=''       
    _.forEach(_.keys(o),(k)=>{
            if(_.isEmpty(o[k])){
                html+='';
            }
            else{
            let value = '';
            if(_.isPlainObject(o[k]) && !_.isEmpty(o[k])){
                value+=getResolvedObject(o[k]);
            }else if(_.isArray(o[k])){
                value+= getResolvedArray(o[k])
            }else{
                value = o[k];
            }
            html+= `<div class='list ui segment'><h3>${k} :</h3>${value}</div>`;}
    })
    return html
}



