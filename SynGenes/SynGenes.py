__author__      = "Luan Rabelo"
__license__     = "MIT"
__version__     = "1.0.2"
__maintainer__  = "Luan Rabelo"
__email__       = "luanrabelo@outlook.com"
__date__        = "2024/01/01"
__twitter__     = "lprabelo"
__github__      = "luanrabelo/SynGenes"
__status__      = "Stable"
__tool__        = "SynGenes"

import os 
import sys
import time

class TerminalColors:
    Header      = '\033[95m'
    Blue        = '\033[94m'
    Cyan        = '\033[96m'
    Green       = '\033[92m'
    Warning     = '\033[93m'
    Fail        = '\033[91m'
    End         = '\033[0m'
    Bold        = '\033[1m'
    Underline   = '\033[4m'

try:
    import requests
    print(f"{TerminalColors.Green}Module 'Requests' found and imported!{TerminalColors.End}")
except ImportError:
    print(f"{TerminalColors.Fail}Module 'Requests' not found, please install it with: pip install requests{TerminalColors.End}")
    print(f"{TerminalColors.Warning}{TerminalColors.Underline}Do you want to install it now? (yes/no){TerminalColors.End}")
    Choice = str(input())
    if Choice.lower() == 'y' or Choice.lower() == 'yes':
        os.system('pip install requests')
        print(f"{TerminalColors.Green}Module 'Requests' installed successfully!{TerminalColors.End}")
        try:
            import requests
            print(f"{TerminalColors.Green}Module 'Requests' found and imported!{TerminalColors.End}")
        except ImportError:
            print(f"{TerminalColors.Fail}Module 'Requests' not found, please reinstall it with: pip install requests{TerminalColors.End}")
            sys.exit()
    else:
        print(f"{TerminalColors.Fail}Installation 'Requests' aborted!{TerminalColors.End}")

try:
    import pandas as pd
    print(f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}")
except ImportError:
    print(f"{TerminalColors.Fail}Module 'Pandas' not found, please install it with: pip install pandas{TerminalColors.End}")
    print(f"{TerminalColors.Warning}{TerminalColors.Underline}Do you want to install it now? (yes/no){TerminalColors.End}")
    Choice = str(input())
    if Choice.lower() == 'y' or Choice.lower() == 'yes':
        os.system('pip install pandas')
        print(f"{TerminalColors.Green}Module 'Pandas' installed successfully!{TerminalColors.End}")
        try:
            import pandas as pd
            print(f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}")
        except ImportError:
            print(f"{TerminalColors.Fail}Module 'Pandas' not found, please reinstall it with: pip install pandas{TerminalColors.End}")
            sys.exit()
    else:
        print(f"{TerminalColors.Fail}Installation 'Pandas' aborted!{TerminalColors.End}")

class SynGenes:
    """
        ### `SynGenes`: a Python class for standardizing mitochondrial and chloroplast gene nomenclatures.
        ## `Created by Luan Rabelo and Marcelo Vallinoto, 2023`

        ---
        This class is used to standardize mitochondrial and chloroplast gene nomenclatures.
        It uses the `SynGenes` database to fix gene names and build queries for Entrez search in `GenBank` or `PubMedCentral`.
        
        Functions:
            - `updateSynGenes()`: Download SynGenes database from GitHub repository (stable branch).
            - `fixGeneName()`: Fix gene name according to the SynGenes database.
            - `buildQuery()`: Build a query for Entrez search.
            - `buildJson()`: Build a JSON file with the SynGenes database.
            - `citeSynGenes()`: Citation for SynGenes database.
            - `versionSynGenes()`: Version of SynGenes database.

        Note:
            - This class requires the 'requests' and 'pandas' libraries to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> # Start SynGenes class
        >>> sg = SynGenes()
        >>> # Update SynGenes database from GitHub repository (stable branch)
        >>> sg.updateSynGenes()
        >>> # Fix gene name according to the SynGenes database
        >>> _gene = sg.fixGeneName(geneName='cytochrome c oxidase subunit I', type='mt')
        >>> print(_gene) # return 'COI'
        >>> # Build a query for Entrez search
        >>> _query = sg.buildQuery(geneName='COI', type='mt', searchType='Title')
        >>> print(_query) # return '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title] OR "cytochrome c oxidase subunit 1"[Title]...'
        >>> # Build a JSON file with the SynGenes database
        >>> sg.buildJson()
        ```
        """
    # Link to SynGenes database in GitHub repository (stable branch)
    dataLink = "https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/dbSynGenes/SynGenes.xlsx"
    # Current working directory path (where the script where imported is located)
    cwdPath  = os.getcwd()

    def __init__(self, **kwargs):
        """
        ### Start `SynGenes` class.
        This function starts the `SynGenes` class.
        ---

        Parameters:
            - `verbose (bool)`: Print messages (True or False). Default is True.

        Returns:
            - None

        Note:
            - This function requires the 'requests' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        ```
        """
        Verbose = kwargs.get('verbose', True) # Get verbose from kwargs

        if not os.path.exists(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx') or not os.path.isfile(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'):
            if Verbose == True:
                print(f"{TerminalColors.Warning}SynGenes database not found in {SynGenes.cwdPath}{TerminalColors.End}!\n")
                print(f"{TerminalColors.Warning}Creating folder 'SynGenes' in {SynGenes.cwdPath}{TerminalColors.End}")
            try:
                os.makedirs(f'{SynGenes.cwdPath}/SynGenes', exist_ok=True, mode=0o777)
                if Verbose == True:
                    print(f"{TerminalColors.Green}Folder 'SynGenes' was created successfully ({time.strftime('%Y/%m/%d - %H:%M:%S')})!\n{TerminalColors.End}")
            except:
                if Verbose == True:
                    print(f"{TerminalColors.Fail}Error creating folder 'SynGenes'! Verify if you have permission to create folders in this directory.{TerminalColors.End}")
                sys.exit()
            if Verbose == True:
                print(f'{TerminalColors.Warning}Downloading SynGenes database from https://github.com/luanrabelo/SynGenes, please wait...{TerminalColors.End}')
            FileName = f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'
            download = requests.get(SynGenes.dataLink, stream=True)
            if download.ok:
                with open(FileName, 'wb') as f:
                    for chunk in download.iter_content(chunk_size=1024*16):
                        if chunk:
                            f.write(chunk)
                            f.flush()
                            os.fsync(f.fileno())
                if Verbose == True:
                    print(f'{TerminalColors.Green}Downloaded SynGenes database successfully ({time.strftime("%Y/%m/%d - %H:%M:%S")})!\n{TerminalColors.End}')
            else:
                if Verbose == True:
                    print(f'{TerminalColors.Fail}Download SynGenes database failed: status code {download.status_code} - {download.text}{TerminalColors.End}')
                sys.exit()

    def updateSynGenes(self, **kwargs):
        """
        ### Download `SynGenes` database from GitHub repository (stable branch).
        This function downloads the SynGenes database from the GitHub repository (stable branch) and saves it in the SynGenes folder.
        ---
    
        Parameters:
            - `verbose (bool)`: Print messages (True or False). Default is True.

        Returns:
            - Downloaded SynGenes database in SynGenes folder.

        Note:
            - This function requires the 'requests' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> sg.updateSynGenes()
        ```
        """
        Verbose = kwargs.get('verbose', True) # Get verbose from kwargs

        if os.path.exists(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx') or os.path.isfile(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'):
            if Verbose == True:
                print(f"{TerminalColors.Warning}SynGenes database found in {SynGenes.cwdPath}{TerminalColors.End}!\n")
                print(f"{TerminalColors.Warning}Removing old SynGenes database...{TerminalColors.End}")
            try:
                os.remove(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx')
                if Verbose == True:
                    print(f"{TerminalColors.Green}Old SynGenes database removed successfully!\n{TerminalColors.End}")
            except:
                if Verbose == True:
                    print(f"{TerminalColors.Fail}Error removing old SynGenes database! Verify if you have permission to remove files in this directory.{TerminalColors.End}")
                sys.exit()
        else:
            if Verbose == True:
                print(f"{TerminalColors.Warning}SynGenes database not found in {SynGenes.cwdPath}{TerminalColors.End}!\n")
                print(f"{TerminalColors.Warning}Creating folder 'SynGenes' in {SynGenes.cwdPath}{TerminalColors.End}")
            try:
                os.makedirs('SynGenes', exist_ok=True, mode=0o777)
                if Verbose == True:
                    print(f"{TerminalColors.Green}Folder 'SynGenes' created successfully ({time.strftime('%Y/%m/%d - %H:%M:%S')})!\n{TerminalColors.End}")
            except:
                if Verbose == True:
                    print(f"{TerminalColors.Fail}Error creating folder 'SynGenes'! Verify if you have permission to create folders in this directory.{TerminalColors.End}")
                sys.exit()

        print(f'{TerminalColors.Warning}Downloading SynGenes database from https://github.com/luanrabelo/SynGenes, please wait...{TerminalColors.End}')
        _fileName = f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'
        download = requests.get(SynGenes.dataLink, stream=True)
        if download.ok:
            with open(_fileName, 'wb') as f:
                for chunk in download.iter_content(chunk_size=1024*16):
                    if chunk:
                        f.write(chunk)
                        f.flush()
                        os.fsync(f.fileno())
            if Verbose == True:
                print(f'{TerminalColors.Green}Downloaded SynGenes database successfully ({time.strftime("%Y/%m/%d - %H:%M:%S")})!\n{TerminalColors.End}')
        else:
            if Verbose == True:
                print(f'{TerminalColors.Fail}Download SynGenes database failed: status code {download.status_code} - {download.text}{TerminalColors.End}')
            sys.exit()

    def fixGeneName(self, **kwargs):
        """
        ### Fix Gene Name according to the `SynGenes` database.
        ---

        Parameters:
            - `geneName (str)`: The gene name to be corrected.
            - `type (str)`: Type of gene (mt = Mitochondrial, cp = Chloroplast). Default is mt.
            - `verbose (bool)`: Print messages (True or False). Default is True.

        Returns:
            - `ShortName (str)`: Fixed gene name.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> _geneName = sg.fixGeneName(geneName='cytochrome c oxidase subunit I', type='mt')
        >>> print(_geneName)
        'COI'
        """

        FullName  = kwargs.get('geneName', '')      # Get geneName from kwargs
        Organelle = kwargs.get('type', 'mt')        # Get type from kwargs
        Verbose   = kwargs.get('verbose', True)     # Get verbose from kwargs

        if Organelle == 'mt': # mt = Mitochondrial
            df = pd.DataFrame(pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name="Mitochondrial", dtype=str)).reset_index()
        elif Organelle == 'cp': # cp = Chloroplast
            df = pd.DataFrame(pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name="Chloroplast", dtype=str)).reset_index()
        else:
            print(f"{TerminalColors.Fail}Error! Organelle {Organelle} not found in SynGenes database!{TerminalColors.End}")
            print(f"{TerminalColors.Warning}Please, insert a valid type! mt for Mitochondrial or cp for Chloroplast{TerminalColors.End}")
            sys.exit()
                
        ListFullName  = df['Full Name'].values.tolist()     # Convert DataFrame column to list
        ListShortName = df['Short Name'].values.tolist()    # Convert DataFrame column to list
        if Verbose == True:
            print(f"{TerminalColors.Warning}Searching for '{FullName}' in SynGenes database...{TerminalColors.End}")
        if FullName in ListFullName:
            Local       = ListFullName.index(FullName)  # Get index of FullName in ListFullName
            ShortName   = ListShortName[Local]          # Get ShortName in ListShortName using index of FullName
            if Verbose == True:
                print(f"{TerminalColors.Green}Gene '{FullName}' found in SynGenes database!{TerminalColors.End}")
                print(f"{TerminalColors.Warning}Gene '{FullName}' renamed to '{ShortName}'!{TerminalColors.End}")
        else:
            ShortName = FullName # If FullName not found in ListFullName, ShortName = FullName
            if Verbose == True:
                print(f"{TerminalColors.Fail}'{ShortName}' not found in SynGenes database{TerminalColors.End}")
                print(f"{TerminalColors.Warning}Adding '{ShortName}' to SynGenes.log{TerminalColors.End}")
            with open(f"{SynGenes.cwdPath}SynGenes.log", "a+") as f:
                f.write(f"{ShortName}\n")
            if Verbose == True:
                print(f"{TerminalColors.Green}Gene '{ShortName}' added to SynGenes.log{TerminalColors.End}")
        
        return str(ShortName)
    
    def buildQuery(self, **kwargs):
        """
        ### Build a `query` for Entrez search.
        ---

        Parameters:
            - `geneName (str)`: Gene name to search. Gene Name must be in the correct format, use the function fixGeneName() to fix the gene name.
            - `type (str)`: Type of gene (mt = Mitochondrial, cp = Chloroplast). Default is mt.
            - `searchType (str)`: Type of search (Title, Abstract, All Fields, MeSH Terms). Default is All Fields.
            - `verbose (bool)`: Print messages (True or False). Default is True.

        Returns:
            - `query (str)`: Query for Entrez search in GenBank or PubMed.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> query = sg.buildQuery(geneName='cytochrome c oxidase subunit I', type='mt', searchType='Title')
        >>> print(query)
        '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title] OR "cytochrome c oxidase subunit 1"[Title] OR "chytochrome c oxidase subunit I"[Title]...'
        ```
        """
        _listGenes_mt   = ["12S", "16S", "ATP6", "ATP8", "COI", "COII", "COIII", "CYTB", "ND1", "ND2", "ND3", "ND4", "ND4L", "ND5", "ND6", "Control Region"]
        _listGenes_cp   = ['accD', 'atpA', 'atpB', 'atpE', 'atpF', 'atpH', 'atpI', 'ccsA', 'cemA', 'chlB', 'chlL', 'chlN', 'clpP', 'clpP1', 'cysA', 'cysT', 'ftsH', 'infA', 'lhbA', 'matK', 'matk', 'ndhA', 'ndhB', 'ndhC', 'ndhD', 'ndhE', 'ndhF', 'ndhG', 'ndhH', 'ndhI', 'ndhJ', 'ndhK', 'pafI', 'pafII', 'pbf1', 'petA', 'petB', 'petD', 'petE', 'petG', 'petL', 'petN', 'psaA', 'psaB', 'psaC', 'psaI', 'psaJ', 'psaM', 'psb30', 'psbA', 'psbB', 'psbC', 'psbD', 'psbE', 'psbF', 'psbG', 'psbH', 'psbI', 'psbJ', 'psbK', 'psbL', 'psbM', 'psbN', 'psbT', 'psbZ', 'rbcL', 'rpl14', 'rpl16', 'rpl2', 'rpl20', 'rpl21', 'rpl22', 'rpl23', 'rpl32', 'rpl33', 'rpl36', 'rpoA', 'rpoB', 'rpoC1', 'rpoC2', 'rps11', 'rps12', 'rps14', 'rps15', 'rps16', 'rps18', 'rps19', 'rps2', 'rps3', 'rps4', 'rps7', 'rps8', 'rrn16S', 'rrn23S', 'rrn4.5S', 'rrn5S', 'tRNA-Asp', 'tRNA-Cys', 'tRNA-Gln', 'tRNA-Glu', 'tRNA-Gly', 'tRNA-Ile', 'tRNA-Leu', 'tRNA-Lys', 'tRNA-Met', 'tRNA-Phe', 'tRNA-Pro', 'tRNA-Ser', 'tRNA-Thr', 'tRNA-Trp', 'tRNA-Tyr', 'tRNA-Ala', 'tRNA-Val', 'tRNA-His', 'tRNA-Asn', 'tRNA-Arg', 'tRNA-Sec', 'ycf1', 'ycf12', 'ycf15', 'ycf2', 'ycf3', 'ycf4']
        _listTypes      = ["Title", "Abstract", "All Fields", "MeSH Terms"]

        _listQuery      = []                                            # List of queries
        _geneName       = str(kwargs.get('geneName', ''))               # Get geneName from kwargs
        _organelle      = str(kwargs.get('type', "mt"))                 # Get type from kwargs and convert to lowercase
        _strTypes       = str(kwargs.get('searchType', "All Fields"))   # Get searchType from kwargs
        _verbose        = kwargs.get('verbose', True)                   # Get verbose from kwargs

        if _geneName in _listGenes_mt or _geneName in _listGenes_cp: # Check if geneName is in the correct format
            print(f"{TerminalColors.Warning}Gene '{_geneName}' is already in the correct format!{TerminalColors.End}")
            if _organelle == 'mt':
                _file       = pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name='Mitochondrial')
            elif _organelle == 'cp':
                _file       = pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name='Chloroplast')
            else:
                print(f"{TerminalColors.Fail}Please, insert a valid type! mt for Mitochondrial or cp for Chloroplast{TerminalColors.End}")
                sys.exit()

            if _strTypes in _listTypes:
                if _verbose == True:
                    print(f"{TerminalColors.Warning}Type '{_strTypes}' is already in the correct format!{TerminalColors.End}")
                else:
                    if _verbose == True:
                        print(f"{TerminalColors.Warning}Type '{_strTypes}' is not in the correct format!{TerminalColors.End}")
                        print(f"{TerminalColors.Warning}Correct format is {_listTypes}{TerminalColors.End}")
                    sys.exit()

                for index, row in _file.iterrows():
                    if row['Short Name'] == _geneName and row['Short Name'] not in _listQuery:
                        fullName = row['Full Name']
                        _listQuery.append(f'"{fullName}"[{_strTypes}]')
            else:
                if _verbose == True:
                    print(f"{TerminalColors.Warning}Type '{_strTypes}' is not in the correct format!{TerminalColors.End}")
                    print(f"{TerminalColors.Warning}Correct format is {_listTypes}{TerminalColors.End}")
                sys.exit()
        else:
            print(f"{TerminalColors.Warning}Gene '{_geneName}' is not in the correct format!{TerminalColors.End}")
            print(f"{TerminalColors.Warning}Correct format is {_listGenes_mt} to Mitochondrial genes!{TerminalColors.End}")
            print(f"{TerminalColors.Warning}Correct format is {_listGenes_cp} to Chloroplast genes!{TerminalColors.End}")
            sys.exit()
        
        if _listQuery: # Check if _listQuery is not empty
            return ' OR '.join(_listQuery) # Return query for Entrez search in GenBank or PubMed
        else:
            print(f"{TerminalColors.Warning}No results found for '{_geneName}' in SynGenes database!{TerminalColors.End}")
            return "" # Return empty string
        
    def buildJson(self, **kwargs):
        """
        ### Build a JSON file with the data of SynGenes database.
        ---

        Parameters:
            - `fileName (str)`: Name of the JSON file. Default is SynGenes.js
            - `pathSaveFile (str)`: Path to save the JSON file. Default is SynGenes folder, in the current working directory.
            - `verbose (bool)`: Print messages (True or False). Default is True.

        Returns:
            - `SynGenes.js` file in SynGenes folder.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> sg.buildJson()
        ```
        """
        _list           = []
        _fileName       = kwargs.get('fileName', 'SynGenes.js')
        _pathSaveFile   = kwargs.get('pathSaveFile', f'{SynGenes.cwdPath}')
        _verbose        = kwargs.get('verbose', True)

        _listGenes_mt   = ["12S", "16S", "ATP6", "ATP8", "COI", "COII", "COIII", "CYTB", "ND1", "ND2", "ND3", "ND4", "ND4L", "ND5", "ND6", "Control Region"]
        _listGenes_cp   = ['accD', 'atpA', 'atpB', 'atpE', 'atpF', 'atpH', 'atpI', 'ccsA', 'cemA', 'chlB', 'chlL', 'chlN', 'clpP', 'clpP1', 'cysA', 'cysT', 'ftsH', 'infA', 'lhbA', 'matK', 'matk', 'ndhA', 'ndhB', 'ndhC', 'ndhD', 'ndhE', 'ndhF', 'ndhG', 'ndhH', 'ndhI', 'ndhJ', 'ndhK', 'pafI', 'pafII', 'pbf1', 'petA', 'petB', 'petD', 'petE', 'petG', 'petL', 'petN', 'psaA', 'psaB', 'psaC', 'psaI', 'psaJ', 'psaM', 'psb30', 'psbA', 'psbB', 'psbC', 'psbD', 'psbE', 'psbF', 'psbG', 'psbH', 'psbI', 'psbJ', 'psbK', 'psbL', 'psbM', 'psbN', 'psbT', 'psbZ', 'rbcL', 'rpl14', 'rpl16', 'rpl2', 'rpl20', 'rpl21', 'rpl22', 'rpl23', 'rpl32', 'rpl33', 'rpl36', 'rpoA', 'rpoB', 'rpoC1', 'rpoC2', 'rps11', 'rps12', 'rps14', 'rps15', 'rps16', 'rps18', 'rps19', 'rps2', 'rps3', 'rps4', 'rps7', 'rps8', 'rrn16S', 'rrn23S', 'rrn4.5S', 'rrn5S']

        if _verbose == True:
            print(f"{TerminalColors.Warning}Creating JSON file...{TerminalColors.End}")
        if os.path.exists(f'{_pathSaveFile}/{_fileName}') or os.path.isfile(f'{_pathSaveFile}/{_fileName}'):
            if _verbose == True:
                print(f"{TerminalColors.Warning}JSON file found in {_pathSaveFile}{TerminalColors.End}!\n")
                print(f"{TerminalColors.Warning}Removing old JSON file...{TerminalColors.End}")
            try:
                os.remove(f'{_pathSaveFile}/{_fileName}')
                if _verbose == True:
                    print(f"{TerminalColors.Green}Old JSON file removed successfully!\n{TerminalColors.End}")
            except:
                print(f"{TerminalColors.Fail}Error removing old JSON file! Verify if you have permission to remove files in this directory.{TerminalColors.End}")
                sys.exit()
        else:
            if _verbose == True:
                print(f"{TerminalColors.Warning}JSON file not found in {_pathSaveFile}{TerminalColors.End}!\n")
                print(f"{TerminalColors.Warning}Creating folder 'json' in {_pathSaveFile}{TerminalColors.End}")
            try:
                os.makedirs(f'{_pathSaveFile}', exist_ok=True, mode=0o777)
                if _verbose == True:
                    print(f"{TerminalColors.Green}Folder 'json' created successfully ({time.strftime('%Y/%m/%d - %H:%M:%S')})!\n{TerminalColors.End}")
            except:
                print(f"{TerminalColors.Fail}Error creating folder 'json'! Verify if you have permission to create folders in this directory.{TerminalColors.End}")
                sys.exit()
        if _verbose == True:
            print(f'{TerminalColors.Warning}Creating JSON file in {_pathSaveFile}, please wait...{TerminalColors.End}')
        with open(f'{_pathSaveFile}/{_fileName}', 'a+') as f:
            f.write('const MitochondrialGenes = {\n')
            _file = pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name='Mitochondrial')
            for i in _listGenes_mt:
                for index, row in _file.iterrows():
                    if row['Short Name'] == i:
                        _list.append(row['Full Name'])
                f.write(f'"{i}": {_list},\n')
                _list.clear()
            f.write('};\n\n')

            f.write('const ChloroplastGenes = {\n')
            _file = pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name='Chloroplast')
            for i in _listGenes_cp:
                for index, row in _file.iterrows():
                    if row['Short Name'] == i:
                        _list.append(row['Full Name'])
                f.write(f'"{i}": {_list},\n')
                _list.clear()
            f.write('};\n\n')

            # Write date to JSON file
            _date = time.strftime("%Y/%m/%d - %H:%M:%S")
            f.write(f'const updateDate = "{_date}"\n')

        print(f'{TerminalColors.Green}JSON file created successfully ({time.strftime("%Y/%m/%d - %H:%M:%S")})!\n{TerminalColors.End}')

    def citeSynGenes(self):
        """
        ### Citation for `SynGenes` database.
        ---

        Parameters:
            - None

        Returns:
            - None

        Note:
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> howCite = sg.citeSynGenes()
        >>> print(howCite)
        ''
        ```
        """
        print(f"{TerminalColors.Warning}Please, cite the SynGenes database as:{TerminalColors.End}")
        print(f"{TerminalColors.Warning}...{TerminalColors.End}")

    def versionSynGenes(self):
        """
        ### Version of `SynGenes` database.
        ---

        Parameters:
            - None

        Returns:
            - None

        Note:
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> version = sg.versionSynGenes()
        >>> print(version)
        '1.0'
        ```
        """
        print(f"{TerminalColors.Warning}SynGenes version {__version__}{TerminalColors.End}")