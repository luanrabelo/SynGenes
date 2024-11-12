<p align="center">
  <img src="https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/docs/assets/SynGenes.png" alt="SynGenes Logo" width="25%">
</p>

<p align="center">
  <a href="https://www.buymeacoffee.com/lprabelo" target="_blank">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=lprabelo&button_colour=FFFFFF&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=000000" />
  </a>
</p>

[![Published in%20](https://img.shields.io/badge/Published_in-BMC%20Bioinformatics-blue)](https://doi.org/10.1186/s12859-024-05781-y) [![Publish SynGenes in PYPI%20](https://github.com/luanrabelo/SynGenes/actions/workflows/publish_pypi.yml/badge.svg)](https://github.com/luanrabelo/SynGenes/actions/workflows/publish_pypi.yml) [![Publish SynGenes in Anaconda%20](https://github.com/luanrabelo/SynGenes/actions/workflows/publish_conda.yml/badge.svg)](https://github.com/luanrabelo/SynGenes/actions/workflows/publish_conda.yml) [![Pylint%20](https://github.com/luanrabelo/SynGenes/actions/workflows/pylint.yml/badge.svg)](https://github.com/luanrabelo/SynGenes/actions/workflows/pylint.yml)

# Contents Overview
- [System Overview](#system-overview)
- [License](#licence)
  - The Hitchhiker's Guide to ***SynGenes***
    - [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation of SynGenes Class](#installation)
    - [Functions](#functions)
      - [__init__](#__init__)
      - [Update SynGenes](#update)
      - [Fix Gene Name](#fix_gene_name)
      - [Build Query](#build_query)
      - [Build Json File](#build_json)
      - [SynGenes Version](#version_syngenes)
      - [Cite SynGenes Papper](#cite_syngenes)
- [SynGenes Development Team](#syngenes-development-team)
- [Citing SynGenes](#citing-syngenes)
- [Contact](#contact)
***
# System Overview
##### [:rocket: Go to Contents Overview](#contents-overview)
<p align="center">
  <img src="https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/docs/assets/SynGenes.png" alt="dataFishing Logo" width="15%">
</p>

**SynGenes** is a **Python class** designed to standardize gene **nomenclatures** for **mitochondrial** and **chloroplast** genes. It recognizes various nomenclature variations and converts them into a consistent, standardized format. **This tool simplifies** the integration and comparison of genetic data from different sources by unifying gene names.
***  
# Licence
##### [:rocket: Go to Contents Overview](#contents-overview)
**SynGenes** is released under the **MIT License**. This license permits reuse within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

For more details, please see the **MIT License**.
***
# The Hitchhiker's Guide to **SynGenes**
## Getting Started
##### [:rocket: Go to Contents Overview](#contents-overview)
- ## Prerequisites
Before you run **SynGenes**, make sure you have the following prerequisites installed on your system:
- **Python Environment**
    - Python **version 3.10 or higher**
    - conda (optional)
- Dependencies (automatically installed with pip) 
    - `requests`
    - `pandas`
    - `biopython`
    - `openpyxl`
***  
### Installation
##### [:rocket: Go to Contents Overview](#contents-overview)
There are two ways to install **SynGenes**:
1. Through pip: Install **SynGenes** dependencies directly using pip:
- 1.1. Open the **Terminal** or **Python Environment**
- 1.2. Execute the following command:
```shell
pip install SynGenes
```
or
```shell
pip install SynGenes --upgrade
```
> [!NOTE]
> This command will install **SynGenes** and its **dependencies** in your **Python environment**.
&nbsp;  
2. By cloning the **SynGenes** GitHub repository: 
- 2.1. Open the **Terminal** or **Python Environment**
- 2.2. Execute the following command:
```shell
git clone https://github.com/luanrabelo/SynGenes.git
cd SynGenes  
pip install -r requirements.txt
```
> [!NOTE]
> This will **clone the repository**, then you should navigate to the cloned directory to install **SynGenes and its dependencies using pip**.
&nbsp;  
***
## Functions  
### `__init__`
##### [:rocket: Go to Contents Overview](#contents-overview)
#### `__init__(self, **kwargs)`  
Initializes the **SynGenes** class. This function is the constructor of the class and is called when a new instance of the **SynGenes** class is created.  
  
When an instance of the **SynGenes** class is created, the constructor checks if the `SynGenes.xlsx` database exists at the specified path.
If it does not exist, it will attempt to create the **SynGenes directory** and **download the database from the GitHub repository**.
If verbose is **True**, status messages will be printed in the terminal to inform the user about the progress of these operations.

#### Parameters:
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `False`.

#### Returns:
- `None`

#### Notes:
- This function requires the `requests` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes(verbose=False)
```
&nbsp;  
### `update`
##### [:rocket: Go to Contents Overview](#contents-overview)
#### `update(self, **kwargs)`  
Updates the **SynGenes** database by **downloading it from the GitHub repository's stable branch**. If an existing database is found, it is removed before downloading the new one.  

The `update` function checks if the `SynGenes.xlsx` database file exists in the user’s computer.
If it does, the file is removed.
Then, the function attempts to **download the latest version of the database from the specified GitHub repository URL**.
If the verbose parameter is set to **True**, the function will print messages to the console to inform the user of the progress, including the removal of the old database and the download of the new one.

#### Parameters:
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `False`.

#### Returns:
- The updated `SynGenes` database saved in the `SynGenes` folder.

#### Notes:
- This function requires the `requests` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
sg.update()
```
&nbsp;  
### `fix_gene_name`
##### [:rocket: Go to Contents Overview](#contents-overview)
#### `fix_gene_name(self, **kwargs)`
Corrects the gene name according to the **SynGenes** database, ensuring it adheres to the standardized nomenclature.  

The `fix_gene_name` function takes a gene name and corrects it based on the entries in the **SynGenes** database.
It supports both **mitochondrial (mt)** and **chloroplast (cp)** genes.
If the provided **gene name is found in the database**, **it is replaced with the standardized short name**.
**If not found**, **the original name is returned, and a log entry is created**.
The function provides verbose output if the verbose parameter is set to **True**.

#### Parameters:
- `geneName (str)`: The gene name to be corrected.
- `type (str)`: The type of gene (`mt` for Mitochondrial, `cp` for Chloroplast). The default is `mt`.
- `verbose (bool)`: If set to `True`, messages will be printed during execution. The default is `False`.

#### Returns:
- `ShortName (str)`: The corrected gene name.

#### Notes:
- This function requires the `pandas` library to be imported.
- The `SynGenes` database can be found at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()

# Mitocondrial
_geneName = sg.fix_gene_name(geneName='cytochrome c oxidase subunit I', type='mt')
print(_geneName)
# Output: 'COI'

# Chloroplast
_geneName = sg.fix_gene_name(geneName='ATPsynthaseCF1 alpha subunit', type='cp')
print(_geneName)
# Output: 'atpA'
```
&nbsp;  
### `build_query`
##### [:rocket: Go to Contents Overview](#contents-overview)
#### `build_query(self, **kwargs)`
Builds a query for Entrez search in **GenBank** or **PubMed** using the *SynGenes* database.  

The `build_query` function constructs a query string that can be used for searching specific gene information in **GenBank** or **PubMed** databases.
It ensures that the **gene name is in the correct format** by referencing the predefined lists for **mitochondrial** and **chloroplast** genes.
The **search type** is also validated against a **list of acceptable formats**.
If the verbose parameter is **True**, the function will print informative messages during the query construction process.

#### Parameters:
- `geneName (str)`: The gene name to search. The gene name must be in the correct format; use the `fix_gene_name()` function to correct the gene name.
- `type (str)`: The type of gene (`mt` for Mitochondrial, `cp` for Chloroplast). The default is `mt`.
- `searchType (str)`: The type of search (Title, Abstract, All Fields, MeSH Terms). The default is All Fields.
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `False`.

#### Returns:
- `query (str)`: The query for Entrez search in GenBank or PubMed.

#### Notes:
- This function requires the `pandas` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.
- Predefined lists `_listGenes_mt` and `_listGenes_cp` contain the correct formats for mitochondrial and chloroplast genes, respectively.
- The `_listTypes` contains the valid formats for the search type.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
query = sg.build_query(geneName='COI', type='mt', searchType='Title')
print(query)
# Output: '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title] OR "cytochrome c oxidase subunit 1"[Title] OR "chytochrome c oxidase subunit I"[Title]...'
```
&nbsp;  
### `build_json`
##### [:rocket: Go to Contents Overview](#contents-overview)
#### `build_json(self, **kwargs)`
Creates a JSON file containing the data from the **SynGenes** database.  

The `build_json` function generates a **JSON file** that encapsulates the **SynGenes database’s data**.
It takes the name of the file and the path where it should be saved as parameters.
If the file already exists, it is removed, and a new one is created.
The function provides verbose output if the verbose parameter is set to **True**, informing the user about the file creation process.  

During the creation of the **JSON file**, the function writes the data for **mitochondrial** and **chloroplast** genes into separate objects within the file.
It also records the date when the file was updated. The verbose output will notify the user when the **JSON file** is being created and once it has been successfully created.

#### Parameters:
- `fileName (str)`: The name of the JSON file. The default is `SynGenes.js`.
- `pathSaveFile (str)`: The path where the JSON file will be saved. The default is the `SynGenes` folder in the current working directory.
- `verbose (bool)`: If set to `True`, messages will be printed during execution. The default is `False`.

#### Returns:
- A `SynGenes.js` file in the `SynGenes` folder.

#### Notes:
- This function requires the `pandas` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.
- The function checks if the specified JSON file already exists and removes it before creating a new one.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
sg.build_json()
```
&nbsp;  
### `version_syngenes`
#### `version_syngenes(self)`
##### [:rocket: Go to Contents Overview](#contents-overview)
Displays the current version of the **SynGenes** database.  

The `version_syngenes` function outputs the version number of the **SynGenes database**. It does not take any parameters and does not return any value. Instead, it prints the version number directly to the console.

#### Parameters:
- None

#### Returns:
- None

#### Notes:
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
version = sg.version_syngenes()
print(version)
# Output: '1.0'
```
&nbsp;
### `cite_syngenes`
#### `cite_syngenes(self)`
##### [:rocket: Go to Contents Overview](#contents-overview)
Provides the citation format for the **SynGenes** database.  

The `cite_syngenes` function outputs the correct citation format for referencing the **SynGenes database** in **academic work** or **publications**.
It does not take any parameters and does not return any value. Instead, it prints the citation instructions directly to the console.

#### Parameters:
- None

#### Returns:
- None

#### Notes:
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
howCite = sg.cite_syngenes()
print(howCite)
# Output: Please, cite the SynGenes database as: ...
```
&nbsp;    
***
## Web Form for SynGenes
##### [:rocket: Go to Contents Overview](#contents-overview)
We have developed a user-friendly web form available at (https://luanrabelo.github.io/SynGenes) for researchers who wish to perform individual searches using various names associated with the same gene. This web form generates a command that incorporates multiple names, enabling precise searches on platforms such as the National Center for Biotechnology Information (NCBI) - GenBank and PubMed Central.  
***
### **SynGenes** Development Team
##### [:rocket: Go to Contents Overview](#contents-overview)
- **Luan Rabelo**
- Clayton Sodré
- Rodrigo Sousa
- Luciana Watanabe
- Grazielle Gomes
- **Iracilda Sampaio**
- **Marcelo Vallinoto**
***  
### Citing **SynGenes**
##### [:rocket: Go to Contents Overview](#contents-overview)
When referencing the **SynGenes** class, please cite it appropriately in your academic or professional work.
```
Rabelo, L.P., Sodré, D., de Sousa, R.P.C. et al. SynGenes: a Python class for standardizing nomenclatures of mitochondrial and chloroplast genes and a web form for enhancing searches for evolutionary analyses. BMC Bioinformatics 25, 160 (2024). https://doi.org/10.1186/s12859-024-05781-y
```
***  
### Contact
##### [:rocket: Go to Contents Overview](#contents-overview)
For reporting bugs, requesting assistance, or providing feedback, please reach out to **Luan Rabelo**:
```
luanrabelo@outlook.com
```
***  
