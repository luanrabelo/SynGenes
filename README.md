<p style="text-align: center;"><img src="https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/docs/assets/SynGenes.png" alt="SynGenes" width="50%"></p>
<h1 style="text-align: center;"><b>Syn</b><i>Genes</i></h1>

<h2 style="text-align: center;"> Welcome to <b>Syn</b><i>Genes</i> documentation!</h2>

<p style="text-align: center;">
<img src="https://img.shields.io/github/license/luanrabelo/SynGenes?style=for-the-badge&label=License&labelColor=191919&color=647E68" alt="License"/>
<img src="https://img.shields.io/github/v/release/luanrabelo/SynGenes?style=for-the-badge&label=Release&labelColor=191919&color=647E68" alt="Release"/>
<img src="https://img.shields.io/github/stars/luanrabelo/SynGenes?style=for-the-badge&label=Stars&labelColor=191919&color=647E68" alt="Stars"/>
<img src="https://img.shields.io/github/forks/luanrabelo/SynGenes?style=for-the-badge&label=Forks&labelColor=191919&color=647E68" alt="Forks"/>
<img src="https://img.shields.io/github/downloads/luanrabelo/SynGenes/total?style=for-the-badge&label=Downloads&labelColor=191919&color=647E68" alt="Releases"/>
<img src="https://img.shields.io/github/languages/top/luanrabelo/SynGenes?style=for-the-badge&label=Python&labelColor=191919&color=647E68" alt="Language"/>
<img src="https://img.shields.io/github/commit-activity/t/luanrabelo/SynGenes?style=for-the-badge&label=Commits&labelColor=191919&color=647E68" alt="Commits"/>
<img src="https://img.shields.io/endpoint?url=https://hits.dwyl.com/luanrabelo/SynGenes.json?&labelColor=191919&color=647E68&style=for-the-badge&label=Users" alt="Users"/>
</p>  
  

### **SynGenes** is a Python class for standardizing gene nomenclatures, this class is capable of recognizing and converting the different nomenclature variations into a standardized form.
# Getting Started
***

## 1. Install **SynGenes**
***
### Before installing **SynGenes**, you need to make sure that you have the following prerequisites installed:
* #### Python Environment
    * ##### [Python 3.6 or higher](https://www.python.org/downloads/) *
    * ##### [conda](https://www.anaconda.com/download)
* #### Dependencies
    * **requests** *
    * **pandas** *
    * **openpyxl** *
 
> #### These dependencies are automaticatically installed using the pip commands below.
##### * obrigatory
***
### There are **three** ways to install **SynGenes**:    

#### 1.1. **Through pip**: You can install **SynGenes** directly through pip using the following command:
```bash
pip install SynGenes
```
###### This will install **SynGenes** and its dependencies in your Python environment.  
#### 1.2. **By cloning the source code from GitHub**: You can clone the source code of **SynGenes** from GitHub using the following command:
```bash
git clone https://github.com/luanrabelo/SynGenes.git
```
###### This will clone the repository to your local machine. You can then navigate to the cloned directory and install **SynGenes** and its dependencies using pip:
```bash
cd SynGenes
pip install -r requirements.txt
```

#### 1.3. **Through conda**: You can install **SynGenes** through conda using the following command:
```bash
conda create -n SynGenes -c conda-forge -c bioconda SynGenes
conda activate SynGenes
```
###### This will install **SynGenes** and its dependencies in your conda environment.
***
## Usage
```python
from SynGenes import SynGenes
geneNames = SynGenes()
```
#### To update **SynGenes** database in your computer, run:
```python
geneNames.updateSynGenes()
```
###### This command will delete the database from your computer and download a new one from the **SynGenes** repository.

#### Basic Example
```python
# Mitochondrial
# Convert nomenclature 'cytochrome oxidase subunit I' to 'COI'
# Convert nomenclature 'cytochrome c oxidase subunit I' to 'COI'
FullGeneName1 = "cytochrome oxidase subunit I"
FullGeneName1 = geneNames.FixGeneName(geneName=FullGeneName1, type='mt')
FullGeneName2 = "cytochrome c oxidase subunit I"
FullGeneName2 = geneNames.FixGeneName(geneName=FullGeneName2, type='mt')
print(FullGeneName1)
print(FullGeneName2)
# output
COI
COI


# Chloroplast 
# Convert nomenclature 'ATPsynthaseCF1 alpha subunit' to 'atpA'
# Convert nomenclature 'ATP synthase CF1, subunit alpha' to 'atpA'
FullGeneName1 = "ATPsynthaseCF1 alpha subunit"
FullGeneName1 = geneNames.FixGeneName(geneName=FullGeneName1, type='cp')
FullGeneName2 = "ATP synthase CF1, subunit alpha"
FullGeneName2 = geneNames.FixGeneName(geneName=FullGeneName2, type='cp')
print(FullGeneName1)
print(FullGeneName2)
# output
atpA
atpA
```
###### Here, the user needs to provide the **geneName** parameter (**str**) and the **type** parameter (**str**), where **type='mt'** for **mitochondrial genes** and **type='cp'** for **chloroplast genes**.
### Usage Example with Biopython
```python
from SynGenes import SynGenes
from Bio import SeqIO

# Start SynGenes class
geneNames = SynGenes()
# Update SynGenes database 
geneNames.updateSynGenes()
# Read Example_File_1 file with SeqIO with BioPython
gbFile = SeqIO.read("Example_File_1.gb", "genbank")
for feature in gbFile.features:
    if feature.type == "CDS" or feature.type == "rRNA":
        # Print Genes Names
        print(feature.qualifiers['product'][0])
        # Output
        12S ribosomal RNA
        16S ribosomal RNA
        NADH dehydrogenase subunit 1
        NADH dehydrogenase subunit 2
        cytochrome c oxidase subunit I
        cytochrome c oxidase subunit II
        ATP synthase F0 subunit 8
        ATP synthase F0 subunit 6
        cytochrome c oxidase subunit III
        NADH dehydrogenase subunit 3
        NADH dehydrogenase subunit 4L
        NADH dehydrogenase subunit 4
        NADH dehydrogenase subunit 5
        NADH dehydrogenase subunit 6
        cytochrome b
        # Print Genes Names standardized by SynGenes
        print(geneNames.FixGeneName(geneName=feature.qualifiers['product'][0], type='mt'))
        # Output
        12S
        16S
        NADH-1
        NADH-2
        COI
        COII
        ATP-8
        ATP-6
        COIII
        NADH-3
        NADH-4L
        NADH-5
        NADH-6
        CYTB

# Read Example_File_2 file with SeqIO with BioPython
gbFile2 = SeqIO.read("Example_File_2.gb", "genbank")
for feature in gbFile.features:
    if feature.type == "CDS" or feature.type == "rRNA":
        # Print Genes Names
        print(feature.qualifiers['product'][0])
        # Output
        12S ribosomal RNA subunit
        16S ribosomal RNA subunit
        NADH dehydrogenase subunit I
        NADH dehydrogenase subunit II
        cytochrome oxidase subunit I
        cytochrome oxidase subunit II
        ATPase subunits 8
        ATPase subunits 6
        cytochrome oxidase subunit III
        NADH dehydrogenase subunit III
        NADH dehydrogenase subunit IVL
        NADH dehydrogenase subunit IV
        NADH dehydrogenase subunit V
        NADH dehydrogenase subunit VI
        cytochrome b protein
        # Print Genes Names standardized by SynGenes
        print(geneNames.FixGeneName(geneName=feature.qualifiers['product'][0], type='mt'))
        # Output
        12S
        16S
        NADH-1
        NADH-2
        COI
        COII
        ATP-8
        ATP-6
        COIII
        NADH-3
        NADH-4L
        NADH-5
        NADH-6
        CYTB
```

#### Through an example with two genomes, it is possible to observe that they have different nomenclatures for genes. However, by using SynGenes, it is possible to standardize these nomenclatures. This allows, for example, writing the standardized forms in fasta files or in input files of other tools such as CREx. This way, it is possible to ensure the consistency and compatibility of genomic data when performing subsequent analyzes.

***
## 2. Web Form
### We also created a web form (https://luanrabelo.github.io/SynGenes) to researchers who wish to perform individual searches using different names associated with the same gene. This web form generates a command that incorporates multiple names, enabling precise searches on the National Center for Biotechnology Information (NCBI) - GenBank platform.

***
## Authors
##### Developers
* [Luan Rabelo](https://twitter.com/lprabelo)
* [Marcelo Vallinoto](https://twitter.com/mvallinoto01)
***
## Citation
> Rabelo et al.