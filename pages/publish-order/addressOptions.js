const options = [
    {
      text: '广东医科大学',
      value: '330000',
      children: [
          { text: '2栋', value: '330100' ,children:[
              {text:"101",value:'3301001'},
              {text:"102",value:'3301002'},
              {text:"103",value:'3301003'},
          ]},
          {text:'3栋',value:'330101'}
        ],
    },
    {
      text: '华南农业大学',
      value: '320000',
      children: [{ text: '南京市', value: '320100' }],
    },
];
module.exports={
    options:options
}