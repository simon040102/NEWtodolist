let text = document.querySelector('.text');
let save = document.querySelector('.save');
let list = document.querySelector('.list');
let check = document.querySelector('.check');
let count = document.querySelector('.count');
let ary = [
  {
    item: '今天天氣真好，準備去踏青',
    finished: '',
    check: 'false',
  },
  {
    item: '生人無求，在家耍廢救世界',
    finished: '',
    check: 'false',
  },
  {
    item: '拳拳到肉，處處醬肉',
    finished: '',
    check: 'false',
  },
  {
    item: '快點寫作業，老師在你後面很火',
    finished: '',
    check: 'false',
  },
  {
    item: '明天的力氣，今天幫你船便便',
    finished: '',
    check: 'false',
  },
];
init();
//重新整理資料
function init() {
  let str = '';
  let remain = 0;
  ary.forEach(function (items, index) {
    str += `<li class="${items.del}"><a  href="#"><img data-check="${items.check}" class="check ${items.finished}"  data-num=${index} src="images/check_box_outline_blank_black_24dp.svg"></a>${items.item}<a  data-num=${index} href="#" class="del"></a></li>`;

    if (items.check == 'false') {
      remain += 1;
    }
  });
  count.innerHTML = `${remain} 個待完成項目`;
  list.innerHTML = str;
}
//新增
save.addEventListener('click', saveData);
function saveData(e) {
  let obj = { finished: '', check: 'false', del: '' };
  if (text.value == '') {
    return;
  }
  obj.item = text.value;
  ary.push(obj);
  init();
  text.value = '';
}
//刪除&修改
list.addEventListener('click', remove);
function remove(e) {
  e.preventDefault();
  let num = e.target.dataset.num;
  let check = e.target.dataset.check;

  if (e.target.nodeName == 'IMG' && e.target.nodeName !== 'A') {
    if (check == 'false') {
      ary[num].check = 'true';
      ary[num].finished = 'confirm-finished';
      ary[num].del = 'finished';
    } else if (check == 'true') {
      ary[num].check = 'false';
      ary[num].finished = '';
      ary[num].del = '';
    }
    init();
    return
  }
    if (e.target.nodeName == 'A') {
      ary.splice(num, 1);
    }
 init();
}

let select = document.querySelector('.select');

select.addEventListener('click', changeList);
function changeList(e) {
  let choose = e.target.value;
  let str = '';
  if (choose == '全部') {
    init();
  }
  if (choose == '待完成') {
    ary.forEach(function (items, index) {
      if (items.check == 'false') {
        str += `<li class="${items.del}"><a  href="#"><img data-check="${items.check}" class="check ${items.finished}"  data-num=${index} src="images/check_box_outline_blank_black_24dp.svg"></a>${items.item}<a  data-num=${index} href="#" class="del"></a></li>`;
      }
    });
    list.innerHTML = str;
  }
  if (choose == '已完成') {
    ary.forEach(function (items, index) {
      if (items.check == 'true') {
        str += `<li class="${items.del}"><a  href="#"><img data-check="${items.check}" class="check ${items.finished}"  data-num=${index} src="images/check_box_outline_blank_black_24dp.svg"></a>${items.item}<a  data-num=${index} href="#" class="del"></a></li>`;
      }
    });
    list.innerHTML = str;
  }
}

$(document).ready(function () {

  $('.select li').click(function(e){
    $(this).addClass('underline').siblings().removeClass('underline');
    console.log('123')
  });
});
