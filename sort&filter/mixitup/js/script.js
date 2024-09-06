var mixer = mixitup('.product_list', {
  selectors: {
    target: '.item'
  },
  animation: {
    "duration": 343,
    "nudge": true,
    "reverseOut": false,
    "effects": "fade translateX(20%) translateY(20%) translateZ(-100px) rotateX(180deg)"
  }
});
console.log(mixer);

$('#filter').change(function(){
  mixer.filter($(this).val());
})
$('#sort').change(function(){
  mixer.sort($(this).val());
})