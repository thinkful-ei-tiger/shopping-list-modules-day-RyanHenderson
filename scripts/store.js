import item from './item.js';
const   items= [];
const  hideCheckedItems= false;
const findById = function(id){
  return items.find(item => item.id===id);
};
const addItem = function(name){
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  }catch(e){
    console.log(`${e.message}`);
  }
};
const findAndToggleChecked = function(id){
  let toToggle = this.findById(id);
  toToggle.checked = !toToggle.checked;
};
const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
};
const findAndUpdateName = function(id,newName){
  try{
    item.validateName(newName);
    this.findById(id).name = newName;
  }catch(e){
    console.log(`Cannot update name: ${e.message}`);
  }
};
const findAndDelete = function(id){
  let newStore=this.items.filter(item => item.id!==id);
  this.items =newStore;
};

export default {
  items,
  hideCheckedItems,
  findAndDelete,
  findAndUpdateName,
  findAndToggleChecked,
  addItem,
  findById,
  toggleCheckedFilter
};