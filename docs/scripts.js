$(document).ready(function(){
// 
Welcome = $("#Welcome"); // Boas vindas, div com id Welcome será escondida quando o botão Start for clicado e aparecerá novamente quando o botão Reset for clicado
StepOne = $("#Step1"); // Step 1, div com id Step1 será mostrada quando o botão Start for clicado, escolhendo a opção nan em seu select

// Hide btn btn_data
$("#btnData").hide();



$("#Start").click(function(){
    setTimeout(function(){
      $("#Welcome").hide("slow");
    }, 500);
    setTimeout(function(){
      $("#BuyMeCoffee").hide("slow");
    }, 1000);
    setTimeout(function(){
      $("#TableContent").show("slow");
    }, 1500);
    setTimeout(function(){
      $("#btnData").show("slow");
    }, 1500);
    $("#Step1").val("nan").change();
  });


$("#Step1").change(function(){
var StepOne = $("#Step1").val();
if (StepOne == "Gene") {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("nan").change();
    $("#Step3").val("nan").change();
    $("#GenomeType").hide("slow");
    $("#MitochondrialGenes").hide("slow");
    $("#SearchSpecie").hide("slow");
    $("#SearchSpecieGenome").addClass("Hidden");
    $("#LabelStep1").removeClass("bg-danger");
    $("#LabelStep1").addClass("bg-success");
    setTimeout(function(){
    $("#GenomeType").show("slow");
    }, 250);
    $("#StringGenomeType").text("Genes");
    $("#st2").val("nan").change();
    $("#ChloroplastGenes").hide("slow");
} else if (StepOne == "Genome") {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("nan").change();
    $("#Step3").val("nan").change();
    $("#GenomeType").hide("slow");
    $("#MitochondrialGenes").hide("slow");
    $("#SearchSpecieGenome").addClass("Hidden");
    $("#LabelStep1").removeClass("bg-danger");
    $("#LabelStep1").addClass("bg-success");
    $("#SearchSpecie").hide("slow");
    setTimeout(function(){
    $("#GenomeType").show("slow");
    }, 250);
    $("#StringGenomeType").text("Genomes");
    $("#st2").val("nan").change();
    $("#ChloroplastGenes").hide("slow");
} else {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("nan").change();
    $("#Step3").val("nan").change();
    $("#GenomeType").hide("slow");
    $("#MitochondrialGenes").hide("slow");
    $("#GenomeChoice").hide("slow");
    $("#SearchSpecieGenome").addClass("Hidden");
    $("#SearchSpecie").hide("slow");
    $("#GeneChoice").hide("slow");   
    $("#LabelStep1").removeClass("bg-success");
    $("#LabelStep1").addClass("bg-danger");
    $("#st2").val("nan").change();
    $("#ChloroplastGenes").hide("slow");
}});

$("#Step2").change(function(){
      var StepOne = $("#Step1").val();
      var StepTwo = $("#Step2").val();
      if (StepOne == "Gene" && StepTwo == "Mitochondrial") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").show("slow");
        $("#ChloroplastGenes").hide("slow");
        $("#Step3MitochondrialGenes").show("slow");
        // Hide SearchButton and ResetButton and Results
        $("#SearchButton").hide("slow");
        $("#ResetButton").hide("slow");
        $("#Results").hide("slow");
        // clear values from Step4 and Step3Genomes
        $("#Step4").val("").change();
        $("#Step3Genomes").val("").change();
        }, 250);
      } else if (StepOne == "Genome" && StepTwo == "Mitochondrial") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#SearchSpecieGenome").removeClass("Hidden");
        $("#ChloroplastGenes").hide("slow");
        $("#SearchSpecie").hide("slow");
        $("#SearchButton").hide("slow");
        $("#ResetButton").hide("slow");
        $("#Results").hide("slow");
        $("#Step4").val("").change();
        $("#Step3Genomes").val("").change();

        }, 250);
      } else if (StepOne == "Genome" && StepTwo == "Chloroplast") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#SearchSpecieGenome").removeClass("Hidden");
        $("#ChloroplastGenes").hide("slow");
        $("#SearchSpecie").hide("slow");
        $("#SearchButton").hide("slow");
        $("#ResetButton").hide("slow");
        $("#Results").hide("slow");
        $("#Step4").val("").change();
        $("#Step3Genomes").val("").change();
        }, 250);
      } else if (StepOne == "Gene" && StepTwo == "Chloroplast") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#ChloroplastGenes").show("slow");
        $("#SearchSpecie").hide("slow");
        $("#SearchButton").hide("slow");
        $("#ResetButton").hide("slow");
        $("#Results").hide("slow");
        $("#Step4").val("").change();
        $("#Step3Genomes").val("").change();
        }, 250);
      } else {
        $("#MitochondrialGenes").hide("slow");
        $("#ChloroplastGenes").hide("slow");
        $("#LabelStep2").removeClass("bg-success");
        $("#LabelStep2").addClass("bg-danger");
        $("#SearchSpecie").hide("slow");
        $("#Step4").val("").change();
        $("#Step3Genomes").val("").change();

      }
  });






$("#Step3MitochondrialGenes").val("nan").change(); // Reset Step 3 to default value when page is loaded
$("#Step3Genomes").val("").change(); // Reset Step 3 Genomes to default value when page is loaded
$("#Step4").val("").change(); // Reset Step 4 to default value when page is loaded


$("#ResetButton").click(function() {
$("#Step1").val("nan").change(); // Reset Step 1 to default value when page is loaded
$("#Step2").val("nan").change(); // Reset Step 2 to default value when page is loaded
   location.reload();
});


  $("#TableContent").hide(); // Hide table content and show only when button is clicked
  $("#Welcome").show(); // Show welcome message
  //$("#SearchSpecieGenome").hide();
  $("#ChloroplastGenes").hide();
  $("#SearchSpecieGenome").addClass("Hidden");

  

 

  

  $("#SearchButton").hide();
  $("#ResetButton").hide();



  $("#GenomeType").hide(); // Hide step 2 and show only when step 1 is selected
  $("#MitochondrialGenes").hide(); // Hide step 3 and show only when step 2 is selected
  $("#TextQuery").hide(); // Hide step 4 and show only when step 3 is selected
  $("#SearchSpecie").hide(); // Hide step 4 and show only when step 3 is selected
  
  $("#Results").hide();

  




    // If Step2 is selected, show Step3
    

$('#Step3Genomes').keyup(function () {
  var StringCount = $('#Step3Genomes').val().length;
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();

  
  if (StringCount >= 5) {
    $("#LabelStep3Genome").removeClass("bg-danger");
    $("#LabelStep3Genome").addClass("bg-success");
    $("#SearchButtonText").text("Search "+StepTwo +" "+ StepOne +" for "+$('#Step3Genomes').val());
    SearchButtonText
    setTimeout(function(){
    $("#SearchButton").show("slow");
    $("#ResetButton").show("slow");
    }, 250);
  } else {
    $("#LabelStep3Genome").removeClass("bg-success");
    $("#LabelStep3Genome").addClass("bg-danger");
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#SearchButtonText").text("Search");
    
  }
});

// Get the value of the selected option id="Step3"
$('#Step3ChloroplastGenes').on('change', function () {
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();
  var StepTree = $("#Step3ChloroplastGenes").val();

  if (StepOne == "Gene" && StepTwo == "Chloroplast" && StepTree != 'nan') {
    $("#LabelStep3").removeClass("bg-danger");
    $("#LabelStep3").addClass("bg-success");
    $("#LabelStepChloroplast").removeClass("bg-danger");
    $("#LabelStepChloroplast").addClass("bg-success");
    
    setTimeout(function(){
        //$("#TableContent").removeClass("row-cols-3");
        //$("#TableContent").addClass("row-cols-4");
        $("#SearchSpecie").hide("slow");
        $("#SearchSpecie").show("slow");
        $("#GeneSearch").text(StepTree);
        }, 300);
  } else {
    $("#SearchSpecie").hide();
    //$("#TableContent").removeClass("row-cols-3");
    //$("#TableContent").addClass("row-cols-2");
    $("#LabelStepChloroplast").removeClass("bg-success");
    $("#LabelStepChloroplast").addClass("bg-danger");
  }
});


// Get the value of the selected option id="Step3"
$('#Step3MitochondrialGenes').on('change', function () {
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();
  var StepTree = $("#Step3MitochondrialGenes").val();
  // hide SearchButton, ResetButton and ResultQuery
  $("#SearchButton").hide("slow");
  $("#ResetButton").hide("slow");
  $("#Results").hide("slow");
  
  if (StepOne == "Gene" && StepTwo == "Mitochondrial" && StepTree != 'nan') {
    $("#LabelStep3").removeClass("bg-danger");
    $("#LabelStep3").addClass("bg-success");
    $("#LabelStepMitochondrial").removeClass("bg-danger");
    $("#LabelStepMitochondrial").addClass("bg-success");
    setTimeout(function(){
        $("#SearchSpecie").hide("slow");
        $("#SearchSpecie").show("slow");
        $("#Step4").val("");
        $("#GeneSearch").text(StepTree);
        }, 300);
  } else {
    $("#Step3MitochondrialGenes").val("nan").change();
    $("#SearchSpecie").hide();
    $("#LabelStep3").removeClass("bg-success");
    $("#LabelStep3").addClass("bg-danger");
  }
});

// Count characters in Step4 input field each time a key is pressed
$('#Step4').keyup(function () {
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();
  var StepTreeMT = $("#Step3MitochondrialGenes").val();
  var StepTreeCL = $("#Step3ChloroplastGenes").val();
  var characterCount = $(this).val().length;
  spName = $('#Step4').val();


  if (spName.indexOf("idae") > -1) {
    $("#LabelStep4").removeClass("fst-italic");
    $("#LabelStep4").addClass("fst-normal");
    $("#LabelStep3Genome").removeClass("fst-italic");
    $("#LabelStep3Genome").addClass("fst-normal");
    console.log("idae");
  } else {
    $("#LabelStep4").removeClass("fst-normal");
    $("#LabelStep4").addClass("fst-italic");
    $("#LabelStep3Genome").removeClass("fst-normal");
    $("#LabelStep3Genome").addClass("fst-italic");
    console.log("not idae");
  }

  if (StepTwo == "Mitochondrial") {
  if (characterCount >= 5) {
    $("#LabelStep4").removeClass("bg-danger");
    $("#LabelStep4").addClass("bg-success");
    $("#SearchButtonText").text("Search "+StepTwo +" "+ StepOne + " ("+ StepTreeMT+") for "+$('#Step4').val());
    setTimeout(function(){
    $("#SearchButton").show("slow");
    $("#ResetButton").show("slow");
    }, 300);
  }} 
  else if (StepTwo == "Chloroplast") {
    if (characterCount >= 5) {
    $("#LabelStep4").removeClass("bg-danger");
    $("#LabelStep4").addClass("bg-success");
    $("#SearchButtonText").text("Search "+StepTwo +" "+ StepOne + " ("+ StepTreeCL+") for "+$('#Step4').val());
    setTimeout(function(){
    $("#SearchButton").show("slow");
    $("#ResetButton").show("slow");
    }, 300);
  } else {
    $("#LabelStep4").removeClass("bg-success");
    $("#LabelStep4").addClass("bg-danger");
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");

  }
  }});


$("#SearchButton").click(function(){
  $("#Loading").modal('show');
  var Gene      = $("#Step1").val();
  var Genome    = $("#Step2").val();

  if (Gene == "Gene" && Genome == "Mitochondrial") {
    var Gene        = $("#Step3MitochondrialGenes").val();
    var Specie      = $("#Step4").val();
    var GenesSyn    = MitochondrialGenes[Gene];
    // For each gene in the array, create a query ("{NewSpecie}"[Organism] OR "{NewSpecie}"[Title])
    var Query = '("'+ Specie +'"[Organism] OR "'+ Specie +'"[Title]) AND ("'+ Gene +'"[Title]';
    for (var i = 0; i < GenesSyn.length; i++) {
      var Query = Query + ' OR "' + GenesSyn[i] + '"[Title]';
    }
    var Query = Query + ') AND mitochondrion[filter]';
    setTimeout(function(){
      $("#Loading").modal('hide');
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      
    }, 5000);
    setTimeout(function(){
      $("#Results").show();
      $("#ResultQuery").val(Query);
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      $(document).scrollTop($(document).height());
    }, 5200);
    
  } 
  
  else if (Gene == "Genome" && Genome == "Mitochondrial") {
    var Specie  = $("#Step3Genomes").val();
    var GenomeSyn = Genomes[Genome];
    var Query = '("'+ Specie +'"[Organism] OR "'+ Specie +'"[Title]) AND ("mtGenome"[Title]';
    for (var i = 0; i < GenomeSyn.length; i++) {
      var Query = Query + ' OR "' + GenomeSyn[i] + '"[Title]';
    }
    var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND mitochondrion[filter]';
    setTimeout(function(){
      $("#Loading").modal('hide');
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
    setTimeout(function(){
      $("#Results").show();
      $("#ResultQuery").val(Query);
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      $(document).scrollTop($(document).height());
    }, 5200);

  }

  else if (Gene == "Gene" && Genome == "Chloroplast") {
    var Gene        = $("#Step3ChloroplastGenes").val();
    var Specie      = $("#Step4").val();
    var GenesSyn    = ChloroplastGenes[Gene];
    // For each gene in the array, create a query ("{NewSpecie}"[Organism] OR "{NewSpecie}"[Title])
    var Query = '("'+ Specie +'"[Organism] OR "'+ Specie +'"[Title]) AND ("'+ Gene +'"[Title]';
    for (var i = 0; i < GenesSyn.length; i++) {
      var Query = Query + ' OR "' + GenesSyn[i] + '"[Title]';
    }
    var Query = Query + ') AND chloroplast[filter]';
    setTimeout(function(){
      $("#Loading").modal('hide');
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      
    }, 5000);
    setTimeout(function(){
      $("#Results").show();
      $("#ResultQuery").val(Query);
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      $(document).scrollTop($(document).height());
    }, 5200);
  }

  else if (Gene == "Genome" && Genome == "Chloroplast") {
    var Specie  = $("#Step3Genomes").val();
    var GenomeSyn = Genomes[Genome];
    var Query = '("'+ Specie +'"[Organism] OR "'+ Specie +'"[Title]) AND ("Chloroplast"[Title]';
    for (var i = 0; i < GenomeSyn.length; i++) {
      var Query = Query + ' OR "' + GenomeSyn[i] + '"[Title]';
    }
    var Query = Query + ') AND ("genome"[Title]) AND ("complete"[Title] OR "partial"[Title]) AND Chloroplast[filter]';
    setTimeout(function(){
      $("#Loading").modal('hide');
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
    }, 5000);
    setTimeout(function(){
      $("#Results").show();
      $("#ResultQuery").val(Query);
      $("#toNCBI").attr('href', 'https://www.ncbi.nlm.nih.gov/nuccore/?term='+Query);
      $(document).scrollTop($(document).height());
    }, 5200);
  }
});

// Click on Button Copy to Clipboard to copy the query to the clipboard
// Function OK
$('#CopyClipboard').click(function(){
    var dataText = document.getElementById("ResultQuery");
    dataText.select();
    dataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    $('#ToastShow').toast('show');
  });

});