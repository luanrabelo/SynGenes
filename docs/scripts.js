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
  var _txtGenomeMitochondrial            = document.querySelector('#txtGenomeMitochondrial');
  _txtGenomeMitochondrial.style.display  = 'none';
  var _cpGenomeSearchTax            = document.querySelector('#cpGenomeSearchTax');
  _cpGenomeSearchTax.style.display  = 'none';
  var _SearchGenesMitochondrialForm           = document.querySelector('#SearchGenesMitochondrialForm');
  _SearchGenesMitochondrialForm.style.display = 'none';
  var _SearchGenesMitochondrialTax           = document.querySelector('#SearchGenesMitochondrialTax');
  _SearchGenesMitochondrialTax.style.display = 'none';
  var _SearchGenesChloroplastForm           = document.querySelector('#SearchGenesChloroplastForm');
  _SearchGenesChloroplastForm.style.display = 'none';

  var _SearchGenesChloroplastTax          = document.querySelector('#SearchGenesChloroplastTax');
  _SearchGenesChloroplastTax.style.display  = 'none';


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
    $('#SelectmtGenomeTax').val("nan").change();
  });
  $('#SelectmtGenomeTax').on('change', function () {
    var labelTax    = $("#LabelmtGenomeTax");
    var txtTax      = $("#txt_mt_Genome_Tax");
    var btnSearch   = $("#btn_Search_GenBank_mt_Genome");
    var resultQuery = $("#mtGenomeResultQuery");
    var taxType     = $(this).val();
  
    if (taxType !== 'nan') {
      labelTax.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      txtTax.attr("placeholder", "Enter the " + taxType + " Name").val("").removeAttr("disabled");
      btnSearch.addClass("disabled");
      resultQuery.val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
      //$("#txtGenomeMitochondrial").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    } else {
      labelTax.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      txtTax.removeAttr("placeholder").addClass("disabled").val("").attr('disabled', 'disabled');
      btnSearch.addClass("disabled");
    }
  });

  

  $('#chGenomeBtn').click(function(){
    $('#GenomeTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#cpGenomeSearchTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    $('#SelectcpGenomeTax').val("nan").change();
  });
  $('#SelectcpGenomeTax').on('change', function () {
    var labelTax    = $("#LabelcpGenomeTax");
    var txtTax      = $("#txt_cp_Genome_Tax");
    var btnSearch   = $("#btn_Search_GenBank_cp_Genome");
    var resultQuery = $("#cpGenomeResultQuery");
    var taxType     = $(this).val();
  
    if (taxType !== 'nan') {
      labelTax.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      txtTax.attr("placeholder", "Enter the " + taxType + " Name").val("").removeAttr("disabled");
      btnSearch.addClass("disabled");
      resultQuery.val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
      //$("#txtGenomeMitochondrial").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    } else {
      labelTax.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      txtTax.removeAttr("placeholder").addClass("disabled").val("").attr('disabled', 'disabled');
      btnSearch.addClass("disabled");
    }
  });

  $('#txt_cp_Genome_Tax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btn_Search_GenBank_cp_Genome").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btn_Search_GenBank_cp_Genome").hasClass("disabled")) {
      $("#PMCResultQuery").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });

  $('#txt_mt_Genome_Tax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btn_Search_GenBank_mt_Genome").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btn_Search_GenBank_mt_Genome").hasClass("disabled")) {
      $("#PMCResultQuery").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });

  $('#btn_Search_GenBank_mt_Genome').click(function(){
    setTimeout(() => {$("#ModalSearchGenBank").modal('show');}, 250);
    var _specieName = $("#txt_mt_Genome_Tax").val();
    var _fieldName  = $("#SelectmtGenomeTax").val();
    var _Genome     = 'Mitochondrial'
    var GenomeArray   = Genomes[_Genome];

    var Query = '("'+ _specieName +'"[Organism] OR "'+ _specieName +'"[Title] OR "'+ _fieldName +'"[Organism]) AND ("mtGenome"[Title]';
    for (var i = 0; i < GenomeArray.length; i++) {
      var Query = Query + ' OR "' + GenomeArray[i] + '"[Title]';
    }
    var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND mitochondrion[filter]';
    setTimeout(() => {
      $("#ModalSearchGenBank").modal('hide');
      $('#txtGenomeMitochondrial').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
      $("#GenBankMitochondrialGenome").val(Query);
      $("#toGenBank").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
  });

  $('#btn_Search_GenBank_cp_Genome').click(function(){
    setTimeout(() => {$("#ModalSearchGenBank").modal('show');}, 250);
    var _specieName = $("#txt_cp_Genome_Tax").val();
    var _fieldName  = $("#SelectcpGenomeTax").val();
    var _Genome     = 'Chloroplast'
    var GenomeArray   = Genomes[_Genome];

    var Query = '("'+ _specieName +'"[Organism] OR "'+ _specieName +'"[Title] OR "'+ _fieldName +'"[Organism]) AND ("chloroplast"[Title]';
    for (var i = 0; i < GenomeArray.length; i++) {
      var Query = Query + ' OR "' + GenomeArray[i] + '"[Title]';
    }
    var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND chloroplast[filter]';
    setTimeout(() => {
      $("#ModalSearchGenBank").modal('hide');
      $('#txtGenomeMitochondrial').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
      $("#GenBankMitochondrialGenome").val(Query);
      $("#toGenBank").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
  });

  $('#SearchGenesMitochondrial').click(function () {
    var _geneName = $("#SelectSearchGenesMitochondrial").val();
    $("#GenesTypeSearch").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $("#SearchGenesMitochondrialForm").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    $("#SelectSearchGenesMitochondrial").val("nan").change();
    $("#SearchGenesMitochondrialGene").html(_geneName);
  });

  $('#SearchGenesChloroplast').click(function () {
    var _geneName = $("#SelectSearchGenesChloroplast").val();
    $("#GenesTypeSearch").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $("#SearchGenesChloroplastForm").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    $("#SelectSearchGenesChloroplast").val("nan").change();
    $("#SearchGenesChloroplastGene").html(_geneName);
  });

  $('#SelectSearchGenesMitochondrial').on('change', function () {
    var valSelect = $('#SelectSearchGenesMitochondrial').val();
    var label     = $("#LabelSearchGenesMitochondrial");
    if (valSelect !== 'nan') {
      label.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      $("#SearchGenesMitochondrialTax").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() { $(this).show(); });
      $("#LabelSearchGenesMitochondrialTax").removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      $("#SelectGenesMitochondrialTax").val("nan").change();
      $("#TxtGenesMitochondrialTax").val("");
    } else {
      label.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      $("#SearchGenesMitochondrialTax").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() { $(this).hide(); });
      $("#LabelSearchGenesMitochondrialTax").removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      $("#TxtGenesMitochondrialTax").val("");
    }
    $("#btnGenesMitochondrialTax").addClass("disabled");
  });

  $('#SelectGenesChloroplastTax').on('change', function () {
    var valSelect = $('#SelectGenesChloroplastTax').val();
    var label     = $("#LabelSearchGenesChloroplastTax");
    var txtTax    = $("#TxtGenesChloroplastTax");
    var btnSearch = $("#btnGenesChloroplastTax");

    if (valSelect !== 'nan') {
      label.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      txtTax.attr("placeholder", "Enter the " + valSelect + " Name").val("").removeAttr("disabled");
      btnSearch.addClass("disabled");
    } else {
      label.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      txtTax.removeAttr("placeholder").addClass("disabled").val("").attr('disabled', 'disabled');
      btnSearch.addClass("disabled");
    }
  });

  $('#SelectSearchGenesChloroplast').on('change', function () {
    var valSelect = $('#SelectSearchGenesChloroplast').val();
    var label     = $("#LabelSearchGenesChloroplast");
    if (valSelect !== 'nan') {
      label.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      $("#SearchGenesChloroplastTax").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() { $(this).show(); });
      $("#LabelSearchGenesChloroplastTax").removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      $("#SelectGenesChloroplastTax").val("nan").change();
      $("#TxtGenesChloroplastTax").val("");
    } else {
      label.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      $("#SearchGenesChloroplastTax").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() { $(this).hide(); });
      $("#LabelSearchGenesChloroplastTax").removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      $("#TxtGenesChloroplastTax").val("");
    }
    $("#btnGenesChloroplastTax").addClass("disabled");
  });

  $('#TxtGenesChloroplastTax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btnGenesChloroplastTax").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btnGenesChloroplastTax").hasClass("disabled")) {
      $("#GenBankChloroplastGenes").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });

  $("#btnGenesChloroplastTax").click(function () {
    setTimeout(() => {$("#ModalSearchGenBank").modal('show');}, 250);
    var _geneName   = $("#SelectSearchGenesChloroplast").val();
    var _specieName = $("#TxtGenesChloroplastTax").val();
    var _fieldName  = $("#SelectGenesChloroplastTax").val();
    var _Genes      = ChloroplastGenes[_geneName];
    var Query       = '("'+ _specieName +'"[Organism] OR "'+ _specieName +'"[Title] OR "'+ _fieldName +'"[Organism]) AND ("'+ _geneName +'"[Title]';
    for (var i = 0; i < _Genes.length; i++) {
      var Query = Query + ' OR "' + _Genes[i] + '"[Title]';
    }
    //var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND chloroplast[filter]';
    var Query = Query + ') AND chloroplast[filter]';
    setTimeout(() => {
      $("#ModalSearchGenBank").modal('hide');
      $('#txtGenomeMitochondrial').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
      $("#GenBankMitochondrialGenome").val(Query);
      $("#toGenBank").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
  });

  $('#SelectGenesMitochondrialTax').on('change', function () {

    var valSelect = $('#SelectGenesMitochondrialTax').val();
    var label     = $("#LabelSearchGenesMitochondrialTax");
    var txtTax    = $("#TxtGenesMitochondrialTax");
    var btnSearch = $("#btnGenesMitochondrialTax");

    if (valSelect !== 'nan') {
      label.removeClass("bg-danger").addClass("bg-success").html("<b>&nbsp;&nbsp;&#x2713;&nbsp;&nbsp;</b>");
      txtTax.attr("placeholder", "Enter the " + valSelect + " Name").val("").removeAttr("disabled");
      btnSearch.addClass("disabled");
    } else {
      label.removeClass("bg-success").addClass("bg-danger").html("<b>&nbsp;&nbsp;&#x2716;&nbsp;&nbsp;</b>");
      txtTax.removeAttr("placeholder").addClass("disabled").val("").attr('disabled', 'disabled');
      btnSearch.addClass("disabled");
    }
  });

  $('#TxtGenesMitochondrialTax').on('keyup', function () {
    var txtTax = $(this).val();
    $("#btnGenesMitochondrialTax").toggleClass("disabled", txtTax.length < 5 || txtTax === 'nan');
    if ($("#btnGenesMitochondrialTax").hasClass("disabled")) {
      $("#GenBankMitochondrialGenes").val("");
      $("#txtFieldPMC").animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    }
  });
  
  $('#btnGenesMitochondrialTax').click(function () {
    setTimeout(() => {$("#ModalSearchGenBank").modal('show');}, 250);
    var _geneName   = $("#SelectSearchGenesMitochondrial").val();
    var _specieName = $("#TxtGenesMitochondrialTax").val();
    var _fieldName  = $("#SelectGenesMitochondrialTax").val();
    var _Genes      = MitochondrialGenes[_geneName];
    var Query       = '("'+ _specieName +'"[Organism] OR "'+ _specieName +'"[Title] OR "'+ _fieldName +'"[Organism]) AND ("'+ _geneName +'"[Title]';
    for (var i = 0; i < _Genes.length; i++) {
      var Query = Query + ' OR "' + _Genes[i] + '"[Title]';
    }
    //var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND mitochondrion[filter]';
    var Query = Query + ') AND mitochondrion[filter]';
    setTimeout(() => {
      $("#ModalSearchGenBank").modal('hide');
      $('#txtGenomeMitochondrial').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
      $("#GenBankMitochondrialGenome").val(Query);
      $("#toGenBank").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
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


  $('#resetBtn').click(function(){
    // Hide all the divs
    //$('.Welcome').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    //$('#dataForm').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    // change the values of the selects
    $("#SelectSearchGenesMitochondrial").val("nan").change();
    $("#SelectSearchGenesChloroplast").val("nan").change();
    $("#SelectGenesMitochondrialTax").val("nan").change();
    $("#SelectmtGenomeTax").val("nan").change();
    $("#SelectcpGenomeTax").val("nan").change();
    $("#SelectPubMedCentralSearch").val("nan").change();
    $("#SelectPubMedCentralField").val("nan").change();
    $("#SelectPubMedCentralTax").val("nan").change();
    // Hide all the divs
    //$('#TypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenBankTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenesTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#SearchGenesMitochondrialForm').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#SearchGenesChloroplastForm').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#SearchGenesMitochondrialTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#SearchGenesChloroplastTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#GenomeTypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#mtGenomeSearchTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#cpGenomeSearchTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#txtGenomeMitochondrial').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#PubMedCentralSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#PubMedCentralSearchField').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#PubMedCentralSearchTax').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#AlertPMCClipboard').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});
    $('#txtFieldPMC').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).hide();});

    $('#TypeSearch').animate({height: 'toggle', opacity: 'toggle'}, "slow", function() {$(this).show();});
    
    

});

});
