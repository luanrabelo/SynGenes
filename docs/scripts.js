const Genes = {
"COI" : ['cytochrome c oxidase subunit I', 'cytochrome c oxidase subunit 1', 'chytochrome c oxidase subunit I', 'I', 'cytochrome oxidase subunit I', 'cytochrome oxidase subunit 1', 'cytochrome oxidase subunits I', 'cytochrome oxidase subunit-1', 'Cytochrome oxydase subunit 1', 'cytochrome c oxidase subunit idase subunit I', 'cytochrome c-oxidase subunit I', 'cytochrome c oxidase subunits I', 'cytochrome c oxidase I', 'cytochrome oxidase I', 'cytchrome c oxidase subunit I', 'subunit 1 of the cytochrome c oxidase', 'COX1', 'cytochorome oxidase subunit I', 'COI', 'cytochrome c oxydase subunit 1', 'cytochrome oxidase1', 'COI protein', 'cyt oxidase subunit 1', 'cytochrome oxidase c subunit 1', 'cytochrome oxidase c subunit I', 'cytochrome oxydase subunit I', 'cytochrome c oxidase subunit', 'cytochrome c oxidase polypeptide I', 'cytochrome coxidase subunit I', 'cytochrome c-oxidase subunit 1', 'cytochrome c oxidase polypeptide 1', 'CO I', 'product: cytochrome c oxidase subunit I', 'cytochome c oxidase subunit 1', 'Cytochrome c oxidase subunit1', 'cytochrome coxidase subunit 1'],
"COII" : ['cytochrome c oxidase subunit 2', 'chytochrome c oxidase subunit II', 'II', 'cytochrome c oxidase subunit II', 'cytochrome oxidase subunit II', 'cytochrome oxidase subunit 2', 'cytohrome oxidase subunit II', 'cytochrome oxidase subunit-2', 'Cytochrome oxydase subunit 2', 'cytochrome c oxidase subunit idase subunit II', 'cytochrome c-oxidase subunit II', 'cytochrome c oxidase subunits II', 'cytochrome c oxidase II', 'cytochrome oxidase II', 'cytchrome c oxidase subunit II', 'subunit 2 of the cytochrome c oxidase', 'COX2', 'cytochorom oxidase subunit II', 'COII', 'cytochrome c oxydase subunit 2', 'CO2', 'cytochrome oxidase subunit2', 'COII protein', 'cyt oxidase subunit 2', 'cytochrome oxidase c subunit 2', 'cytochrome oxidase c subunit II', 'cytochrome oxydase subunit II', 'cytochrome c oxidase polypeptide II', 'cytochrome coxidase subunit II', 'cytochome oxidase II', 'cytochrome c-oxidase subunit 2', 'cytochrome c oxidase polypeptide 2', 'CO II', 'cytochome c oxidase subunit 2', 'Cytochrome c oxidase subunit2', 'cytochrome coxidase subunit 2', 'cytochome oxidase subunit 2', 'C-terminal domain of Cytochrome c Oxidase subunit II'],
"COIII" : ['cytochrome c oxidase subunit 3', 'cytochrome c oxidase subunit III', 'chytochrome c oxidase subunit III', 'cytochrome oxidase subunit III', 'cytochrome oxidase subunit 3', 'cytohrome oxidase subunit III', 'cyctochrome c oxidase subunit III', 'cutochrome oxidase subunit 3', 'cytochrome oxidase subunit-3', 'Cytochrome oxydase subunit 3', 'cytochrome c oxidase subunit idase subunit III', 'cytochrome c-oxidase subunit III', 'cytochrome c oxidase subunits III', 'cytochrome c oxidase III', 'cytochrome oxidase III', 'cytchrome c oxidase subunit III', 'subunit 3 of the cytochrome c oxidase', 'cytochorome oxidase subunit III', 'COX3', 'COIII', 'cytochrome c oxydase subunit 3', 'CO3', 'cytochrome oxidase subunit3', 'cytochrome coxidase subunit III', 'COIII protein', 'cyt oxidase subunit 3', 'cytochrome oxidase c subunit 3', 'cytochrome oxidase c subunit III', 'cytochrome oxydase subunit III', 'cytochrome co oxidase subunit III', 'cytochrome c oxidase subnunit III', 'cytochrome oxidase sununit 3', 'Cytochrome c oxidase polypeptide III', 'cytochrome C oxidase asubunit 3', 'cytochrome c oxidase sununit III', 'cytochrome c-oxidase subunit 3', 'cytochrome c oxidase polypeptide 3', 'CO III', 'cytochome c oxidase subunit 3', 'cytochrome c oxidase subunit3', 'cytochrome coxidase subunit 3'],
"NADH-1" : ['NADH dehydrogenase subunit 1', 'NAD dehydrogenase subunit 1', 'NADH dehydrogenase subunit-1', 'NADH denydrogenase subunit 1', 'NADH dehydrogenase 1', 'NADH dehydrogenase subunits 1', 'NADH dehydogenase subunit 1', 'NADH dehydrogenase subunit1', 'NADH dehydrogenase subunit #1', 'Subunit 1 of the NADH ubiquinone oxidoreductase complex', 'NADHsubunit 1', 'NADH dehydrogenase subnit 1', 'ND1', 'NADH dehydrogenase subunit I', 'NADH1', 'NADH1 protein', 'NADH subunit 1', 'NADH-ubiquinone oxidoreductase chain 1', 'NADH dehydrogenase, subunit 1', 'NADH-ubiquinone oxidoreductase subunit I', 'NADH 1', 'NADH dehydrogenase subumit 1', 'NADH-ubiquinone oxidoreductase subunit 1', 'NADH ubiquinone oxidoreductase subunit 1', 'nicotinamide adenine dinucleotide dehydrogenase subunit 1', 'truncated NADH dehydrogenase subunit 1', 'NADH-1', 'NADH dehdrogenase subunit 1'],
"NADH-2" : ['NADH dehydrogenase subunit 2', 'NADH dehydrogenase subunit-2', '#NADH dehydrogenase subunit 2', 'NADH denydrogenase subunit 2', 'NADH dehydrogenase 2', 'NADH dehydrogenase subunits 2', 'NADH dehydrogenase subunit #2', 'subunit 2 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 2', 'NADH dehydrogenase subnit 2', 'ND2', 'NADH dehydrogenase subunit II', 'NADH2', 'NADH2 protein', 'NADH subunit 2', 'NADH-ubiquinone oxidoreductase chain 2', 'NADH dehdrogenase subnuit 2', 'NADH-ubiquinone oxidoreductase subunit II', 'NADH 2', 'NADH dehydrogenase subumit 2', 'NADH-ubiquinone oxidoreductase subunit 2', 'NADH ubiquinone oxidoreductase subunit 2', 'NADH dehydrognase subunit II', 'nicotinamide adenine dinucleotide dehydrogenase subunit 2', 'NADH dehydrogenase subunit2'],
"NADH-3" : ['NADH dehydrogenase subunit 3', 'NAD dehydrogenase subunit 3', 'NADH dehydrogenase subunit-3', 'NADH denydrogenase subunit 3', 'NADH dehydrogenase 3', 'NADH dehydrogenase subunits 3', 'subunit 3 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 3', 'NADH dehydrogenase subnit 3', 'ND3', 'NADH3', 'NADH dehydrogenase subunit III', 'NADH3 protein', 'NADH subunit 3', 'NADH-ubiquinone oxidoreductase chain 3', 'ND3 NADH dehydrogenase subunit 3', 'NADH dehydrogenasesubunit 3', 'NADH dehydrogenase, subunit 3', 'NADH-ubiquinone oxidoreductase subunit III', 'truncated NADH dehydrogenase subunit 3', 'NADH 3', 'NADH dehydrogenase subumit 3', 'NADH-ubiquinone oxidoreductase subunit 3', 'NADH ubiquinone oxidoreductase subunit 3', 'NADH dehydrogenase subunit3'],
"NADH-4" : ['NADH dehydrogenase subunit 4', 'NAD dehydrogenase subunit 4', 'NADH hehydrogenase subunit 4', 'NADH dehrogenase subunit 4', 'NADH dehydrogenase subunit-4', 'NADH denydrogenase subunit 4', 'NADH dehydrogenase 4', 'NADH dehydrogenase subunits 4', 'NADH dehydrosenase subunit 4', 'subunit 4 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 4', 'NADH dehydrogenase subnit 4', 'ND4', 'NADH dehyodrogenase subunit 4', 'NADH4', 'NADH dehydrogenase subunit4', 'NADH dehydrogenase subunit IV', 'NADH4 protein', 'NADH subunit 4', 'NADH dehydrogenase sunbunit 4', 'NADH-ubiquinone oxidoreductase chain 4', 'NADH-ubiquinone oxidoreductase subunit IV', 'NADH 4', 'NADH dehydrogenase subumit 4', 'NADH-ubiquinone oxidoreductase subunit 4', 'NADH ubiquinone oxidoreductase subunit 4', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4', 'truncated NADH dehydrogenase subunit 4'],
"NADH-4L" : ['NADH dehydrogenase subunit 4L', 'NADH dehydrogenase subunit-4L', 'NADH denydrogenase subunit 4L', 'NADH dehydrogenase 4L', 'ND4L', 'NADH dehydrogenase subunits 4L', 'subunit ND4L of the NADH ubiquinone oxidoreductase complex', 'NADH4L protein', 'NADH dehydrogenase subnit 4L', 'NADH4L', 'NADH dehydrogenase subunit 4 L', 'NADH dehydrogenase subunit IV L', 'NADH subunit 4L', 'NADH-ubiquinone oxidoreductase chain 4L', 'NADH-ubiquinone oxidoreductase subunit 4L', 'NADH dehydrogenase, subunit 4L (complex I)', 'NADH 4L', 'NADH dehydrogenase subumit 4L', 'NADH dehydrogenase subujnit 4L', 'NADH ubiquinone oxidoreductase subunit 4L', 'nicotinamide adenine dinucleotide dehydrogenase subunit 4L', 'NADH dehydrogenase subunit4L'],
"NADH-5" : ['NADH dehydrogenase subunit 5', 'NAD dehydrogenase subunit 5', 'NADH dehrogenase subunit 5', 'NADH dehydrogenase subunit-5', 'NADH hehydrogenase subunit 5', 'NADH denydrogenase subunit 5', 'NADH dehydrogenase 5', 'ND5', 'NADH dehydrogenase subunits 5', 'NADH hydrogenase subunit 5', 'subunit 5 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 5', 'NADH dehydrogenase subnit 5', 'NADH dehydrodenase subunit 5', 'NADH5', 'HADA dehydrogenase subunit 5', 'NADH dehydrogenase subunit V', 'NADH5 protein', 'NADH subunit 5', 'NADH dehydrogenase subunit 5-0', 'NADH-ubiquinone oxidoreductase chain 5', 'NADH-ubiquinone oxidoreductase subunit V', 'NADH dehydrogenase, subunit 5', 'NADH dehydrogenase, subunit 5 complex I', 'NADH 5', 'NADH dehydrogenase subumit 5', 'NADH-ubiquinone oxidoreductase subunit 5', 'NADH ubiquinone oxidoreductase subunit 5', 'nicotinamide adenine dinucleotide dehydrogenase subunit 5', 'truncated NADH dehydrogenase subunit 5', 'NADH dehydrogenase subunit5', 'NADH dehydroghenase subunit 5'],
"NADH-6" : ['NADH dehydrogenase subunit 6', 'NAD dehydrogenase subunit 6', 'NADH dehydrogenase subunit-6', 'NADH denydrogenase subunit 6', 'NADH dehydrogenase 6', 'ND6', 'NADH dehydrogenase subunits 6', 'subunit 6 of the NADH ubiquinone oxidoreductase complex', 'NADH deydrogenase subunit 6', 'NADH dehydrogenase subnit 6', 'NADH6', 'NADH dehydrogenase subunit VI', 'NADH6 protein', 'NADH subunit 6', 'truncated NADH dehydrogenase subunit 6', 'NADH dehygrogenase subunit 6', 'NADH dehydrogenease subunit 6', 'NADH-ubiquinone oxidoreductase chain 6', 'NADH dehydrogenase, subunit 6', 'NADH dsehydrogenase subunit 6', 'NADH-ubiquinone oxidoreductase subunit VI', 'NADH 6', 'NADH dehydrogenase subumit 6', 'NADH-ubiquinone oxidoreductase subunit 6', 'NADH ubiquinone oxidoreductase subunit 6', 'nicotinamide adenine dinucleotide dehydrogenase subunit 6', 'NADH dehydrogenase subunit6'],
"ATP6" : ['ATPase subunit 6', 'ATPase F0 subunit 6', 'ATP synthase F0 subunit 6', 'ATP synthase subunit 6', 'ATPase 6', 'ATP6', 'ATP synthase FO subunit 6', 'ATP synthase protein 6', 'ATPase subunits 6', 'ATP subunit 6', 'ATPase subunit-6', 'ATP synthase subunit F0 6', 'ATPase6', 'adenosine triphosphatase subunit 6', 'ATP synthase subunit-6', 'ATP sythase F0 subunit 6', 'ATPase 6 protein', 'ATP synthase 6', 'ATP synthetase F0 Subunit 6', 'ATPase subuint 6', 'ATPase sununit 6', 'ATPase6 protein', 'ATP Synthase Membrane Subunit 6', 'TP synthase F0 subunit 6', 'ATP sybthase F0 subunit 6', 'ATP6ase', 'ATP synthase A chain protein 6', 'ATP synthetase subunit 6', 'F0/F1 ATP synthase subunit 6', 'disrupted ATP synthase F0 subunit 6', 'ATPsynthase F0 subunit 6', 'F1 ATPase subunit 6', 'ATP sythase subunit 6', 'adenine triphosphatase subunit 6', 'F0-ATP synthase subunit 6', 'F0-ATP synthase subunit6', 'F0-ATPase subunit6'],
"ATP8" : ['ATPase subunit 8', 'ATPase F0 subunit 8', 'ATP synthase F0 subunit 8', 'ATP synthase subunit 8', 'ATPase 8', 'ATP8', 'ATP synthase FO submit 8', 'ATPase8', 'ATP synthase protein 8', 'ATPase subunits 8', 'ATP subunit 8', 'ATPase subunit-8', 'ATP synthase subunit F0 8', 'adenosine triphosphatase subunit 8', 'ATP synthase subunit-8', 'ATP sythase F0 subunit 8', 'ATP synthase FO subunit 8', 'ATPase 8 protein', 'adenosine triphoshatase subunit 8', 'ATP synthase 8', 'ATPase subunit8', 'ATP synthetase F0 Subunit 8', 'adenosine triphosphate subunit 8', 'ATPase8 protein', 'ATP Synthase Membrane Subunit 8', 'TP synthase F0 subunit 8', 'product ATP synthase F0 subunit 8', 'ATP sybthase F0 subunit 8', 'ATP8ase', 'ATP synthetase subunit 8', 'F0/F1 ATP synthase subunit 8', 'ATPsynthase F0 subunit 8', 'F1 ATPase subunit 8', 'ATP sythase subunit 8', 'adenine triphosphatase subunit 8', 'ATP syntahse F0 subunit 8', 'F0-ATP synthase subunit 8', 'F0-ATP synthase subunit8', 'F0-ATPase subunit8'],
"CYTB" : ['cytochrome b', 'Cytochrome b apoenzyme', 'apoenzyme', 'cytohrome b', 'cytochome b', 'cytochorome b', 'cytchrome b', 'cob', 'cytochrome b protein', 'Cythocrome b', 'Cytb protein', 'cytchorome b', 'CYTB', 'Cytochrome-b', 'cytbochrome b', 'apocytochrome b', 'cytochromeb', 'ctyb', 'Cyt b', 'apocytochome b'],
"12S" : ['small subunit ribosomal RNA', 's-rRNA', '12S ribosormal RNA', '12S ribosomal RNA', 'small ribosomal RNA subunit RNA', '12SrRNA', '12 ribosomal RNA', 'rrnS', '12S ribosomal RNA subunit', '12S', 'small ribosomal RNA', 'small subunit ribosormal RNA', '12S rRNA', '12 rRNA', '12 S ribosomal RNA', '12S small subunit ribosomal RNA', 'trnS', 'Product small subunit ribosomal RNA', '12S-rRNA', 'rRNA-12S', '12S ribosonal RNA', '12Srrn', '12S ribosome RNA', '12S ribsomal RNA'],
"16S" : ['large subunit ribosomal RNA', 'l-rRNA', '16S ribosomal RNA', '16S bibosomal RNA', 'large ribosomal RNA subunit RNA', 'rrnL', '16S ribosomal RNA subunit', '16S rivbosomal RNA', 'l6S ribosomal RNA', '16S', '16S ribosamal RNA', 'large ribosomal RNA', '16S rRNA', '16 S ribosomal RNA', '16S large subunit ribosomal RNA', 'l-RNA', '16S-rRNA', '16Srrn', '16S ribosome RNA', '16S ribosommal RNA'],
};

const Genomes = {
"Mitochondrial" : ["mitochondrion", "complete genome", "complete mitochondrial genome", "mitochondrial genome", "partial genome", "partial mitochondrial genome", "incomplete genome", "incomplete mitochondrial genome", "mitochondrial genome, complete genome", "mitochondrial genome, complete sequence", "mitochondrial genome, complete", "mitochondrial genome, partial sequence", "mitochondrial genome, partial", "mitochondrial genome, incomplete sequence", "mitochondrial genome, incomplete", "mitochondrial genome, complete genome", "mitochondrial genome, complete sequence", "mitochondrial genome, complete", "mitochondrial genome, partial sequence", "mitochondrial genome, partial", "mitochondrial genome, incomplete sequence", "mitochondrial genome, incomplete"],
};

$(document).ready(function(){
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
    var Gene    = $("#Step3").val();
    var Specie  = $("#Step4").val();
    var GenesSyn    = Genes[Gene];
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
});

$("#ResetButton").click(function(){
   location.reload();
});

});