$(document).ready(function(){

  var _dataForm = document.querySelector('#dataForm');
  _dataForm.style.display = 'none';

  var _ProgressBar = document.querySelector('#ProgressBar');
  _ProgressBar.style.display = 'none';

  // PubMedCentral Search
  var _PubMedCentralSearch            = document.querySelector('#PubMedCentralSearch');
  _PubMedCentralSearch.style.display  = 'none';
  var _PubMedCentralSearchField           = document.querySelector('#PubMedCentralSearchField');
  _PubMedCentralSearchField.style.display = 'none';
  var _PubMedCentralSearchTax           = document.querySelector('#PubMedCentralSearchTax');
  _PubMedCentralSearchTax.style.display = 'none';
  var _txtFieldPMC              = document.querySelector('#txtFieldPMC');
  _txtFieldPMC.style.display    = 'none';
  var _AlertPMCClipboard            = document.querySelector('#AlertPMCClipboard');
  _AlertPMCClipboard.style.display  = 'none';

  // GenBank Search
  var _GenBankTypeSearch            = document.querySelector('#GenBankTypeSearch');
  _GenBankTypeSearch.style.display  = 'none';
  var _GenesTypeSearch           = document.querySelector('#GenesTypeSearch');
  _GenesTypeSearch.style.display = 'none';
  var _GenomeTypeSearch           = document.querySelector('#GenomeTypeSearch');
  _GenomeTypeSearch.style.display = 'none';
  var _mtGenomeSearchTax            = document.querySelector('#mtGenomeSearchTax');
  _mtGenomeSearchTax.style.display  = 'none';


  // Activate Tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // If Start is clicked, hide the Start button and 
  $('#Start').click(function(){
    $('#Start').tooltip('disable');
    $('.Welcome').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#dataForm').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
  });


  // if PubMedCentral Search is clicked, hide the Start button
  $('#PubMedCentralbtn').click(function(){
    $('#TypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#PubMedCentralSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    $("#SelectPubMedCentralSearch").val("nan").change();
  });
  $('#GenBankbtn').click(function(){
    $('#TypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenBankTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
  });

  $('#GenesTypeBtn').click(function(){
    $('#GenBankTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenesTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
  });
  $('#GenomesTypeBtn').click(function(){
    $('#GenBankTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenomeTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
  });


  $('#mtGenomeBtn').click(function(){
    $('#GenomeTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#mtGenomeSearchTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
  });

  $('#txt_mt_Genome_Tax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btn_Search_GenBank_mt_Genome").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btn_Search_GenBank_mt_Genome").hasClass("disabled")) {
      $("#PMCResultQuery").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });
  
  

  
  $('#SelectPubMedCentralSearch').on('change', function () {
    var valSelect = $(this).val();
    var label     = $("#LabelPubMedCentralSearch");
    var field     = $('#PubMedCentralSearchField');
    var taxField  = $('#PubMedCentralSearchTax');
    var txtTax    = $("#txtPubMedTax");
    var btnSearch = $("#btnSearchPMC");
    if (valSelect !== 'nan') {
      label.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      field.add(taxField).animate({height: 'toggle', opacity: 'toggle'}, "slow", function () { $(this).show(); });
      $("#PubMedGenes").html(valSelect);
      $("#SelectPubMedCentralField").val("nan").change();
      txtTax.val("");
      $("#PMCResultQuery").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    } else {
      label.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      field.add(taxField).animate({height: 'toggle', opacity: 'toggle'}, "slow", function () { $(this).hide(); });
      txtTax.val("");
    }
    btnSearch.addClass("disabled");
  });
  

  $('#SelectPubMedCentralField').on('change', function () {
    var valField    = $(this).val();
    var labelField  = $("#LabelPubMedCentralField");
    var taxField    = $('#PubMedCentralSearchTax');
    var txtTax      = $("#txtPubMedTax");
    var btnSearch   = $("#btnSearchPMC");
    var resultQuery = $("#PMCResultQuery");
  
    if (valField !== 'nan') {
      labelField.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      taxField.animate({height: 'toggle', opacity: 'toggle'}, "slow", function () { $(this).show(); });
      $("#PubMedTax").html($("#SelectPubMedCentralSearch").val());
      $("#SelectPubMedCentralTax").val("nan").change();
      txtTax.val("");
      btnSearch.addClass("disabled");
      resultQuery.val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    } else {
      labelField.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      taxField.animate({height: 'toggle', opacity: 'toggle'}, "slow", function () { $(this).hide(); });
      txtTax.val("");
      btnSearch.addClass("disabled");
    }
  });
  

  $('#SelectPubMedCentralTax').on('change', function () {
    var labelTax    = $("#LabelPubMedCentralTax");
    var txtTax      = $("#txtPubMedTax");
    var btnSearch   = $("#btnSearchPMC");
    var resultQuery = $("#PMCResultQuery");
    var taxType     = $(this).val();
  
    if (taxType !== 'nan') {
      labelTax.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      txtTax.attr("placeholder", "Enter the " + taxType + " Name").val("").removeAttr("disabled");
      btnSearch.addClass("disabled");
      resultQuery.val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    } else {
      labelTax.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      txtTax.removeAttr("placeholder").addClass("disabled").val("").attr('disabled', 'disabled');
      btnSearch.addClass("disabled");
    }
  });
  

  $('#txtPubMedTax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btnSearchPMC").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btnSearchPMC").hasClass("disabled")) {
      $("#PMCResultQuery").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });
  
  


  $('#btnSearchPMC').click(function(){
    setTimeout(() => {$("#ModalSearchPubMedCentral").modal('show');}, 250);
    
    var _geneName   = $("#SelectPubMedCentralSearch").val();
    var _specieName = $("#txtPubMedTax").val();
    var _fieldName  = $("#SelectPubMedCentralField").val();
    
    if (
      _geneName == "COI"   || 
      _geneName == "COII"  || 
      _geneName == "COIII" || 
      _geneName == "ND1"   || 
      _geneName == "ND2"   || 
      _geneName == "ND3"   || 
      _geneName == "ND4"   || 
      _geneName == "ND4L"  || 
      _geneName == "ND5"   ||
      _geneName == "ND6"   ||
      _geneName == "ATP6"  || 
      _geneName == "ATP8"  || 
      _geneName == "12S"   || 
      _geneName == "16S"   || 
      _geneName == "Control Region"
      ) {
      var _Genes = MitochondrialGenes[_geneName];
      console.log(_Genes);
    } else {
      var _Genes = ChloroplastGenes[_geneName];
      console.log(_Genes);
    }

    var Query = '("'+ _specieName +'"[Title] OR "'+ _specieName +'"['+_fieldName+']) AND ("'+ _geneName +'"['+_fieldName+']';
    for (var i = 0; i < _Genes.length; i++) {
      var Query = Query + ' OR "' + _Genes[i] + '"['+_fieldName+']';
    }
    var Query = Query + ')';


    $("#PMCResultQuery").val(Query);
    

    setTimeout(() => {
      $("#ModalSearchPubMedCentral").modal('hide');
      $('#txtFieldPMC').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    }, 5000);
    
    $("#toPMC").attr('href', 'https://www.ncbi.nlm.nih.gov/pmc/?term='+Query);

  });

  $('#CopyPMCClipboard').click(function () {
    var dataText = $("#PMCResultQuery");
    setTimeout(() => {
      dataText.select().prop('selectionStart', 0).prop('selectionEnd', 99999);
      document.execCommand("copy");
      $("#AlertPMCClipboard").toggle("slow").delay(5000).toggle("slow");
    }, 250);
  });
  


  


  //$('#backStep1').click(function(){
  //  console.log('backStep1');
  //  $('#backStep1').tooltip('disable');
  //  $("#st2_tooltip").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
  //  $("#backStep1").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
  //  
  //    
  //  
  //});





//  $("#Step1").change(function(){
//    var StepOne = $("#Step1").val();
//    if (StepOne != 'nan') {
//      goStep2.removeClass('disabled');
//      _goStep2.style.display = 'block';
//      $('#st1_tooltip').tooltip('disable');
//      $("#LabelStep1").addClass("bg-success");
//      $("#iconStep1").removeClass("fa-xmark");
//      $("#LabelStep1").removeClass("bg-danger");
//      $("#iconStep1").addClass("fa-check");
//      setTimeout(() => $('#goStep2').tooltip('show'), 500);
//      setTimeout(() => $('#st1_tooltip').tooltip('hide'), 0);
//    } else {
//      goStep2.addClass('disabled');
//      $("#LabelStep1").removeClass("bg-success");
//      $("#LabelStep1").addClass("bg-danger");
//      $("#iconStep1").removeClass("fa-check");
//      $("#iconStep1").addClass("fa-xmark");
//    }
//  });
//
//
//
//
//  $('#goStep2').click(function(){
//    var StepOne = $("#Step1").val();
//    if (StepOne == "Genes" || StepOne == "Genomes"){
//      _text = "GenBank";
//    } else {
//      _text = "PubMedCentral";
//    }
//    _color = '#E3651D';
//    var newProgressBar = '<div style="background-color: '+_color+';" class="progress-bar w-25">Search: '+StepOne+' ('+_text+')</div>';
//    ProgressBar.append(newProgressBar);
//    setTimeout(() => {$("#Step1").prop('disabled', true);}, 500);
//    setTimeout(() => {_goStep2.style.display = 'none'}, 500);
//    setTimeout(() => {_st2_tooltip.style.display = 'block';}, 750);
//    setTimeout(() => {$("#Step2").val("nan").change()}, 750);
//    setTimeout(() => {_backStep1.style.display = 'block'}, 1000);
//    setTimeout(() => {_goStep3.style.display = 'block'}, 1000);
//    setTimeout(() => $("#SearchType").text(StepOne), 1000);
//  });
//
//  
//  $("#Step2").change(function(){
//    var StepTwo = $("#Step2").val();
//    if (StepTwo != 'nan') {
//      goStep3.removeClass('disabled');
//      $('#st1_tooltip').tooltip('disable');
//      $("#LabelStep2").addClass("bg-success");
//      $("#iconStep2").removeClass("fa-xmark");
//      $("#LabelStep2").removeClass("bg-danger");
//      $("#iconStep2").addClass("fa-check");
//      setTimeout(() => $('#goStep2').tooltip('show'), 500);
//      setTimeout(() => $('#st1_tooltip').tooltip('hide'), 0);
//
//    } else {
//      goStep3.addClass('disabled');
//      $("#LabelStep2").removeClass("bg-success");
//      $("#LabelStep2").addClass("bg-danger");
//      $("#iconStep2").removeClass("fa-check");
//      $("#iconStep2").addClass("fa-xmark");
//    }
//  });

});