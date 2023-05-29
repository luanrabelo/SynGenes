$(document).ready(function(){
    // scroll top page
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }});
  $("#Step1").val("").change();
  $("#TableContent").hide(); // Hide table content and show only when button is clicked
  $("#Welcome").show(); // Show welcome message
  //$("#SearchSpecieGenome").hide();
  $("#ChloroplastGenes").hide();
  $("#SearchSpecieGenome").addClass("Hidden");

  $('#CopyClipboard').click(function(){
    var dataText = document.getElementById("ResultQuery");
    dataText.select();
    dataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    $('#ToastShow').toast('show');
  });

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
  });

  

  $("#SearchButton").hide();
  $("#ResetButton").hide();



  $("#GenomeType").hide(); // Hide step 2 and show only when step 1 is selected
  $("#MitochondrialGenes").hide(); // Hide step 3 and show only when step 2 is selected
  $("#TextQuery").hide(); // Hide step 4 and show only when step 3 is selected
  $("#SearchSpecie").hide(); // Hide step 4 and show only when step 3 is selected
  
  $("#Results").hide();

$("#Step1").change(function(){
var StepOne = $("#Step1").val();
if (StepOne == "Gene") {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("").change();
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
} else if (StepOne == "Genome") {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("").change();
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
} else {
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
    $("#Results").hide("slow");
    $("#Step2").val("").change();
    $("#Step3").val("nan").change();
    $("#GenomeType").hide("slow");
    $("#MitochondrialGenes").hide("slow");
    $("#GenomeChoice").hide("slow");
    $("#SearchSpecieGenome").addClass("Hidden");
    $("#SearchSpecie").hide("slow");
    $("#GeneChoice").hide("slow");   
    $("#LabelStep1").removeClass("bg-success");
    $("#LabelStep1").addClass("bg-danger");
}});



    // If Step2 is selected, show Step3
    $("#Step2").change(function(){
      var StepOne = $("#Step1").val();
      var StepTwo = $("#Step2").val();
      if (StepOne == "Gene" && StepTwo == "Mitochondrial") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").show("slow");
        }, 250);
      } else if (StepOne == "Genome" && StepTwo == "Mitochondrial") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#SearchSpecieGenome").removeClass("Hidden");
        }, 250);
      } else if (StepOne == "Genome" && StepTwo == "Chloroplast") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#SearchSpecieGenome").removeClass("Hidden");
        }, 250);
      } else if (StepOne == "Gene" && StepTwo == "Chloroplast") {
        $("#LabelStep2").removeClass("bg-danger");
        $("#LabelStep2").addClass("bg-success");
        setTimeout(function(){
        $("#MitochondrialGenes").hide("slow");
        $("#ChloroplastGenes").show("slow");
        }, 250);
      } else {
        $("#MitochondrialGenes").hide();
        $("#LabelStep2").removeClass("bg-success");
        $("#LabelStep2").addClass("bg-danger");
      }
  });

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
$('#Step3').on('change', function () {
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();
  var StepTree = $("#Step3").val();

  if (StepOne == "Gene" && StepTwo == "Mitochondrial" && StepTree != 'nan') {
    $("#LabelStep3").removeClass("bg-danger");
    $("#LabelStep3").addClass("bg-success");
    $("#LabelStepMitochondrial").removeClass("bg-danger");
    $("#LabelStepMitochondrial").addClass("bg-success");
    
    setTimeout(function(){
        //$("#TableContent").removeClass("row-cols-3");
        //$("#TableContent").addClass("row-cols-4");
        $("#SearchSpecie").show("slow");
        $("#GeneSearch").text(StepTree);
        }, 300);
  } else {
    $("#SearchSpecie").hide();
    //$("#TableContent").removeClass("row-cols-3");
    //$("#TableContent").addClass("row-cols-2");
    $("#LabelStep3").removeClass("bg-success");
    $("#LabelStep3").addClass("bg-danger");
  }
});

// Count characters in Step4 input field each time a key is pressed
$('#Step4').keyup(function () {
  var StepOne = $("#Step1").val();
  var StepTwo = $("#Step2").val();
  var StepTree = $("#Step3").val();
  var characterCount = $(this).val().length;
  if (characterCount >= 5) {
    $("#LabelStep4").removeClass("bg-danger");
    $("#LabelStep4").addClass("bg-success");
    $("#SearchButtonText").text("Search "+StepTwo +" "+ StepOne + " ("+ StepTree+") for "+$('#Step4').val());
    setTimeout(function(){
    $("#SearchButton").show("slow");
    $("#ResetButton").show("slow");
    }, 300);
  } else {
    $("#LabelStep4").removeClass("bg-success");
    $("#LabelStep4").addClass("bg-danger");
    $("#SearchButton").hide("slow");
    $("#ResetButton").hide("slow");
  }
});


$("#SearchButton").click(function(){
  $("#Loading").modal('show');
  var Gene      = $("#Step1").val();
  var Genome    = $("#Step2").val();

  if (Gene == "Gene" && Genome == "Mitochondrial") {
    var Gene        = $("#Step3").val();
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
    
  } else if (Gene == "Genome" && Genome == "Mitochondrial") {
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
});

$("#ResetButton").click(function(){
   location.reload();
});

});