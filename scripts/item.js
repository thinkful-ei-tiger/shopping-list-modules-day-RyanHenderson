

const validateName =function(name){
  if(name===undefined||name===''){
    throw new TypeError('Name must not be blank');
  }
};

const create=function(name){
  return {name:name,
    id:cuid(),
    checked:false};
};

export default {
  validateName,
  create
};