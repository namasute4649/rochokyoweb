////  abbr�v�f���Đ�������(for WinIE) 
//// by �k����<http://www.akatsukinishisu.net/itazuragaki/id/WinIE_abbr>

////function regenerateAbbr() {
////	if ( navigator.userAgent.match(/MSIE.*Win/) ) {
////		var abbrs = document.getElementsByTagName('abbr');
////		for (var i = 0; i < abbrs.length; i++) {
////			var oldAbbr = abbrs.item(i);
////			var newAbbr = document.createElement('abbr');
////			newAbbr.title = oldAbbr.title;
////			oldAbbr.parentNode.insertBefore(newAbbr, oldAbbr);
////			while (oldAbbr.nextSibling.nodeName != '/ABBR') {
////				newAbbr.appendChild(oldAbbr.nextSibling);
////			}
////			oldAbbr.parentNode.removeChild(oldAbbr.nextSibling);
////			oldAbbr.parentNode.removeChild(oldAbbr);
////			// alert(newAbbr.parentNode.innerHTML); // �m�F�p
////		}
////	}
////}
//function regenerateAbbr() {
//	var abbrs = document.getElementsByTagName('abbr');
//	for (var i = 0; i < abbrs.length; i++) {
//		var oldAbbr = abbrs.item(i);
//		var newAbbr = document.createElement('abbr');
//		newAbbr.title = oldAbbr.title;
//		oldAbbr.parentNode.insertBefore(newAbbr, oldAbbr);
//		while (oldAbbr.nextSibling.nodeName != '/ABBR') {
//			newAbbr.appendChild(oldAbbr.nextSibling);
//		}
//		oldAbbr.parentNode.removeChild(oldAbbr.nextSibling);
//		oldAbbr.parentNode.removeChild(oldAbbr);
//		/*alert(newAbbr.parentNode.innerHTML);*/
//	}
//}
//// q�v�f�̑O��Ɉ��p����t��
//function quote(){
//	var qs = document.getElementsByTagName('q');
//	for (var i = 0; i < qs.length; i++) {
//		var qTop = document.createElement('span');
//		qTop.className = 'qmark';
//		qTop.appendChild(document.createTextNode('\u300c'));  // "�u"
//		var qEnd = document.createElement('span');
//		qEnd.className = 'qmark';
//		qEnd.appendChild(document.createTextNode('\u300d'));  // "�v"
//		qs.item(i).insertBefore(qTop, qs.item(i).firstChild);
//		qs.item(i).appendChild(qEnd);
//	}
//}

//// �A���J�[�v�f�̌�ɉ摜��[title����]��ǉ��iCSS��after�[���v�f��IE�Ŏ����j
//function addImageAndTitle(){
//	if ( navigator.userAgent.match(/MSIE.*Win/) && !navigator.userAgent.match(/Opera/) && !navigator.userAgent.match(/MSIE 8/) && !navigator.userAgent.match(/MSIE 7/) ) {
////	if ( navigator.userAgent.match(/MSIE.*Win/) && !navigator.userAgent.match(/Opera/) ) {
//		var h4s = document.getElementsByTagName('h4');
//		for (var i = 0; i < h4s.length; i++) {
//			var h4 = h4s.item(i);
//			var as = h4.getElementsByTagName('a');
//			for (var j = 0; j < as.length; j++) {
//				var a = as.item(j);
//				var href = a.getAttribute('href','2');
//				if ( href.indexOf(".pdf") > 0) {
//					var titleText = a.getAttribute('title','2');
//					a.outerHTML = a.outerHTML + "<img src='../images/pdf.gif' style='padding:10px 0 0 5px' alt='' border='0' title=" + titleText +">";
//				}else if ( href.indexOf(".xls") > 0) {
//					var titleText = a.getAttribute('title','2');
//					a.outerHTML = a.outerHTML + "<img src='../images/xls.gif' style='padding:0 3px 0 3px;vertical-align:-20%' alt='' border='0' title=" + titleText +">";
//					//a.innerHTML = a.innerHTML + "<img src='../images/pdf.gif' alt='' border='0'><span class='small'>" + titleText + "</span>";
//					//a.innerHTML = a.innerHTML + "<span class='small'>" + titleText + "</span>";
//					//var titleText = "[" + a.getAttribute('title','2') + "]";
//					//var insertedText = a.insertAdjacentText('AfterEnd',titleText);
//					// var img = new Image();
//					// img.src = "../images/pdf.gif"; 
//					// a.insertBefore(img,insertedText)
//					// alert(a.parentNode.innerHTML); // �m�F�p
//				}
//			}
//		}
//	}
//}
///*
//function addImageAndTitle(){
//	if ( navigator.userAgent.match(/MSIE.*Win/) && !navigator.userAgent.match(/Opera/) ) {
//		var h4s = document.getElementsByTagName('h4');
//		for (var i = 0; i < h4s.length; i++) {
//			var h4 = h4s.item(i);
//			var as = h4.getElementsByTagName('a');
//			for (var j = 0; j < as.length; j++) {
//				var a = as.item(j);
//				var titleText = "[" + a.getAttribute('title','2') + "]";
//				a.outerHTML = a.outerHTML + "<img src='../images/pdf.gif' alt='' border='0'><span class='small'>" + titleText + "</span>";
//				//a.innerHTML = a.innerHTML + "<img src='../images/pdf.gif' alt='' border='0'><span class='small'>" + titleText + "</span>";
//				//a.innerHTML = a.innerHTML + "<span class='small'>" + titleText + "</span>";
//				//var titleText = "[" + a.getAttribute('title','2') + "]";
//				//var insertedText = a.insertAdjacentText('AfterEnd',titleText);
//				// var img = new Image();
//				// img.src = "../images/pdf.gif"; 
//				// a.insertBefore(img,insertedText)
//				// alert(a.parentNode.innerHTML); // �m�F�p
//			}
//		}
//	}
//}
//*/
