<p align="center">
  <img src="https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/docs/assets/SynGenes.png" alt="SynGenes Logo" width="50%">
</p>

<h1 align="center">
  <b>Syn</b><i>Genes</i>
</h1>

<h2 align="center">
  Welcome to the <b>Syn</b><i>Genes</i> Documentation!
</h2>

<p align="center">
  <img src="https://img.shields.io/github/license/luanrabelo/SynGenes?style=for-the-badge&label=License&labelColor=191919&color=647E68" alt="License"/>
  <img src="https://img.shields.io/github/v/release/luanrabelo/SynGenes?style=for-the-badge&label=Release&labelColor=191919&color=647E68" alt="Release"/>
  <img src="https://img.shields.io/github/stars/luanrabelo/SynGenes?style=for-the-badge&label=Stars&labelColor=191919&color=647E68" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/luanrabelo/SynGenes?style=for-the-badge&label=Forks&labelColor=191919&color=647E68" alt="Forks"/>
  <img src="https://img.shields.io/github/downloads/luanrabelo/SynGenes/total?style=for-the-badge&label=Downloads&labelColor=191919&color=647E68" alt="Downloads"/>
  <img src="https://img.shields.io/github/languages/top/luanrabelo/SynGenes?style=for-the-badge&label=Python&labelColor=191919&color=647E68" alt="Language"/>
  <img src="https://img.shields.io/github/commit-activity/t/luanrabelo/SynGenes?style=for-the-badge&label=Commits&labelColor=191919&color=647E68" alt="Commits"/>
</p>

<h3 align="left">
  <b>Syn</b><i>Genes</i> is a Python class designed for standardizing gene nomenclatures. It can recognize and convert various nomenclature variations into a standardized format.
</h3>

## License

SynGenes is released under the MIT License. This license permits reuse within proprietary software provided that all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

For more details, please see the MIT License.

## Getting Started
### Prerequisites
Before installing **SynGenes**, ensure that you have the following prerequisites installed:
- Python Environment
  - Python 3.6 or higher
  - conda (optional)
- Dependencies (automatically installed with pip)
  - `requests`
  - `pandas`
  - `openpyxl`
***  
### Installation
There are tree ways to install **SynGenes**:

1. **Through pip**:  Install **SynGenes** directly using pip:  
   ```bash  
   pip install SynGenes
   ```
  - This will install SynGenes and its dependencies in your Python environment.
&nbsp;  
2. **By cloning the GitHub repository**: Clone the source code of **SynGenes** from GitHub:
   ```bash
   git clone https://github.com/luanrabelo/SynGenes.git
   cd SynGenes  
   pip install -r requirements.txt
   ```
  - This command will **clone the repository**, and then you should **navigate to the cloned directory** to **install SynGenes and its dependencies** using pip.
&nbsp;  
3. Installation via **conda**:  You can also install **SynGenes** using conda with the following commands:  
   ```bash
   conda create -n SynGenes -c conda-forge -c bioconda SynGenes
   conda activate SynGenes 
   ```
  - This method will set up **SynGenes** along with its **dependencies** in a **new conda environment**.
&nbsp;  
***
## Functions  
### `__init__(self, **kwargs)`  
Initializes the **SynGenes** class. This function is the constructor of the class and is called when a new instance of the **SynGenes** class is created.  
  
When an instance of the **SynGenes** class is created, the constructor checks if the `SynGenes.xlsx` database exists at the specified path.
If it does not exist, it will attempt to create the **SynGenes directory** and **download the database from the GitHub repository**.
If verbose is **True**, status messages will be printed in the terminal to inform the user about the progress of these operations.

#### Parameters:
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `True`.

#### Returns:
- `None`

#### Notes:
- This function requires the `requests` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes(verbose=True)
```
&nbsp;  
### `updateSynGenes(self, **kwargs)`  
Updates the **SynGenes** database by **downloading it from the GitHub repository's stable branch**. If an existing database is found, it is removed before downloading the new one.  

The `updateSynGenes` function checks if the `SynGenes.xlsx` database file exists in the user’s computer.
If it does, the file is removed.
Then, the function attempts to **download the latest version of the database from the specified GitHub repository URL**.
If the verbose parameter is set to **True**, the function will print messages to the console to inform the user of the progress, including the removal of the old database and the download of the new one.

#### Parameters:
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `True`.

#### Returns:
- The updated `SynGenes` database saved in the `SynGenes` folder.

#### Notes:
- This function requires the `requests` library to be imported.
- The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

#### Usage Example:
```python
from SynGenes import SynGenes
sg = SynGenes()
sg.updateSynGenes()
```
&nbsp;  
### `fixGeneName(self, **kwargs)`
Corrects the gene name according to the **SynGenes** database, ensuring it adheres to the standardized nomenclature.  

The `fixGeneName` function takes a gene name and corrects it based on the entries in the **SynGenes** database.
It supports both **mitochondrial (mt)** and **chloroplast (cp)** genes.
If the provided **gene name is found in the database**, **it is replaced with the standardized short name**.
**If not found**, **the original name is returned, and a log entry is created**.
The function provides verbose output if the verbose parameter is set to **True**.

#### Parameters:
- `geneName (str)`: The gene name to be corrected.
- `type (str)`: The type of gene (`mt` for Mitochondrial, `cp` for Chloroplast). The default is `mt`.
- `verbose (bool)`: If set to `True`, messages will be printed during execution. The default is `True`.

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
_geneName = sg.fixGeneName(geneName='cytochrome c oxidase subunit I', type='mt')
print(_geneName)
# Output: 'COI'

# Chloroplast
_geneName = sg.fixGeneName(geneName='ATPsynthaseCF1 alpha subunit', type='cp')
print(_geneName)
# Output: 'atpA'
```
&nbsp;  
### `buildQuery(self, **kwargs)`
Builds a query for Entrez search in **GenBank** or **PubMed** using the *SynGenes* database.  

The `buildQuery` function constructs a query string that can be used for searching specific gene information in **GenBank** or **PubMed** databases.
It ensures that the **gene name is in the correct format** by referencing the predefined lists for **mitochondrial** and **chloroplast** genes.
The **search type** is also validated against a **list of acceptable formats**.
If the verbose parameter is **True**, the function will print informative messages during the query construction process.

#### Parameters:
- `geneName (str)`: The gene name to search. The gene name must be in the correct format; use the `fixGeneName()` function to correct the gene name.
- `type (str)`: The type of gene (`mt` for Mitochondrial, `cp` for Chloroplast). The default is `mt`.
- `searchType (str)`: The type of search (Title, Abstract, All Fields, MeSH Terms). The default is All Fields.
- `verbose (bool)`: If `True`, messages will be printed during execution. The default is `True`.

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
query = sg.buildQuery(geneName='COI', type='mt', searchType='Title')
print(query)
# Output: '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title] OR "cytochrome c oxidase subunit 1"[Title] OR "chytochrome c oxidase subunit I"[Title]...'
```
&nbsp;  
### `buildJson(self, **kwargs)`
Creates a JSON file containing the data from the **SynGenes** database.  

The `buildJson` function generates a **JSON file** that encapsulates the **SynGenes database’s data**.
It takes the name of the file and the path where it should be saved as parameters.
If the file already exists, it is removed, and a new one is created.
The function provides verbose output if the verbose parameter is set to **True**, informing the user about the file creation process.  

During the creation of the **JSON file**, the function writes the data for **mitochondrial** and **chloroplast** genes into separate objects within the file.
It also records the date when the file was updated. The verbose output will notify the user when the **JSON file** is being created and once it has been successfully created.

#### Parameters:
- `fileName (str)`: The name of the JSON file. The default is `SynGenes.js`.
- `pathSaveFile (str)`: The path where the JSON file will be saved. The default is the `SynGenes` folder in the current working directory.
- `verbose (bool)`: If set to `True`, messages will be printed during execution. The default is `True`.

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
sg.buildJson()
```
&nbsp;  
### `citeSynGenes(self)`
Provides the citation format for the **SynGenes** database.  

The `citeSynGenes` function outputs the correct citation format for referencing the **SynGenes database** in **academic work** or **publications**.
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
howCite = sg.citeSynGenes()
print(howCite)
# Output: Please, cite the SynGenes database as: ...
```
&nbsp;  
### `versionSynGenes(self)`
Displays the current version of the **SynGenes** database.  

The `versionSynGenes` function outputs the version number of the **SynGenes database**. It does not take any parameters and does not return any value. Instead, it prints the version number directly to the console.

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
version = sg.versionSynGenes()
print(version)
# Output: '1.0'
```
&nbsp;  
***
## Web Form for SynGenes
We have developed a user-friendly web form available at (https://luanrabelo.github.io/SynGenes) for researchers who wish to perform individual searches using various names associated with the same gene. This web form generates a command that incorporates multiple names, enabling precise searches on platforms such as the National Center for Biotechnology Information (NCBI) - GenBank and PubMed Central.  
***
## Developers
- Luan Rabelo
- Marcelo Vallinoto
- Iracilda Sampaio
