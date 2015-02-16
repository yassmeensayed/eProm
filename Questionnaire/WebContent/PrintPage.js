var mJsPrintAvailable = (window.print ? 1 : 0);
var mIsIE = (document.all ? 1 : 0);
var mIsMac = (navigator.userAgent.indexOf("Mac") != -1);
var mPrintingDone = 0;
var mTimerID = null;

if (mIsIE && !mIsMac){
  document.writeln('<OBJECT ID="WB" WIDTH="0" HEIGHT="0" CLASSID="clsid:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>');
  document.writeln('<' + 'SCRIPT LANGUAGE=VBscript>');
  document.writeln('Sub vbPrintPage(pOption)');
  document.writeln('  On Error Resume Next');
  document.writeln('  WB.ExecWB pOption, 1');
  document.writeln('  Set WB = nothing');
  document.writeln('End Sub');
  document.writeln('<' + '/SCRIPT>');
}

function PrintPage(){

    if (mJsPrintAvailable){
        window.print()
    }else if (mIsIE && !mIsMac){
      vbPrintPage(6)
    }else{
        alert("Your browser does not support this feature. Please print using your browser's own print option");
    }
}


function PrintPreview(){


   if (mIsIE && !mIsMac){
      vbPrintPage(7)
    }else{
        alert("Your browser does not support this feature. Please use your browser's own print preview option, e.g. (in Mozilla Firefox): \n\nFile/Print Preview");
    }
}

function PrintSetup(){


   if (mIsIE && !mIsMac){
      vbPrintPage(8)
    }else{
        alert("Your browser does not support this feature. Please use your browser's own Page Setup option, e.g. (in Mozilla Firefox): \n\nFile/Page Setup");
    }



}