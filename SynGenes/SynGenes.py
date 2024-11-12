import os
import sys
import time
import subprocess

__author__ = "Luan Rabelo"
__license__ = "MIT"
__version__ = "1.1.0"
__maintainer__ = "Luan Rabelo"
__email__ = "luanrabelo@outlook.com"
__date__ = "2024/01/01"
__twitter__ = "lprabelo"
__github__ = "luanrabelo/SynGenes"
__status__ = "Stable"
__tool__ = "SynGenes"
__coffee__ = "https://www.buymeacoffee.com/lprabelo"

class TerminalColors:
    """
    ### `TerminalColors`: a Python class for terminal colors.
    ## `Created by Luan Rabelo, 2023`
    """
    Green       = '\033[92m'
    Warning     = '\033[93m'
    Fail        = '\033[91m'
    End         = '\033[0m'
    Bold        = '\033[1m'
    Underline   = '\033[4m'

try:
    import requests
    print(
        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
        f"{TerminalColors.Green}Module 'Requests' found and imported!{TerminalColors.End}"
    )
except ImportError:
    print(
        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
        f"{TerminalColors.Fail}Module 'Requests' not found! {TerminalColors.End}"
        f"{TerminalColors.Warning}Please install it with: pip install requests{TerminalColors.End}"
    )
    choice = input(
        f"{TerminalColors.Warning}{TerminalColors.Underline}"
        "Do you want to install it now? (yes/no)"
        f"{TerminalColors.End}"
    ).strip().lower()
    if choice in ['y', 'yes', 's']:
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Green}Installing 'Requests', please wait...{TerminalColors.End}"
        )
        try:
            subprocess.run(['pip', 'install', 'requests'], check=True)
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Green}"
                f"Module 'Requests' installed successfully!"
                f"{TerminalColors.End}"
            )
            import requests
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Green}Module 'Requests' found and imported!{TerminalColors.End}"
            )
        except subprocess.CalledProcessError:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Fail}Failed to install 'Requests'. "
                f"Please try installing it manually with: pip install requests{TerminalColors.End}"
            )
            sys.exit(1)
    else:
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Fail}Installation 'Requests' aborted!{TerminalColors.End}"
        )
        sys.exit(1)

try:
    import pandas as pd
    print(
        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
        f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}"
    )
except ImportError:
    print(
        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
        f"{TerminalColors.Fail}Module 'Pandas' not found! {TerminalColors.End}"
        f"{TerminalColors.Warning}Please install it with: pip install pandas{TerminalColors.End}"
    )
    choice = input(
        f"{TerminalColors.Warning}{TerminalColors.Underline}"
        "Do you want to install it now? (yes/no)"
        f"{TerminalColors.End}"
    ).strip().lower()
    if choice in ['y', 'yes', 's']:
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Green}Installing 'Pandas', please wait...{TerminalColors.End}"
        )
        try:
            subprocess.run(['pip', 'install', 'pandas'], check=True)
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Green}"
                f"Module 'Pandas' installed successfully!"
                f"{TerminalColors.End}"
            )
            import pandas as pd
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}"
            )
        except subprocess.CalledProcessError:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Fail}"
                f"Failed to install 'Pandas'. "
                f"Please try installing it manually with: pip install pandas"
                f"{TerminalColors.End}"
            )
            sys.exit(1)
    else:
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Fail}Installation 'Pandas' aborted!{TerminalColors.End}"
        )
        sys.exit(1)

class SynGenes:
    """
        # `SynGenes`: a Python class for standardizing mitochondrial/chloroplast gene nomenclatures.
        ## `Created by Luan Rabelo and Marcelo Vallinoto, 2024`

        ---
        This class is used to standardize mitochondrial and chloroplast gene nomenclatures.
        It uses the `SynGenes` database to fix gene names and 
        build queries for Entrez search in `GenBank` or `PubMedCentral`.
        
        Functions:
            - `update()`: Download SynGenes database from GitHub repository (stable branch).
            - `fix_gene_name()`: Fix gene name according to the SynGenes database.
            - `build_query()`: Build a query for Entrez search.
            - `build_json()`: Build a JSON file with the SynGenes database.
            - `version_syngenes()`: Version of SynGenes database.
            - `cite_syngenes()`: Citation for SynGenes database.

        Note:
            - This class requires the 'requests' and 'pandas' libraries to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> # Start SynGenes class
        >>> sg = SynGenes()
        >>> # Update SynGenes database from GitHub repository (stable branch)
        >>> sg.update()
        >>> # Fix gene name according to the SynGenes database
        >>> _gene = sg.fix_gene_name(geneName='cytochrome c oxidase subunit I', type='mt')
        >>> print(_gene) # return 'COI'
        >>> # Build a query for Entrez search
        >>> _query = sg.build_query(geneName='COI', type='mt', searchType='Title')
        >>> print(_query) # return '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title]...'
        >>> # Build a JSON file with the SynGenes database
        >>> sg.build_json()
        ```
        """
    # Link to SynGenes database in GitHub repository (stable branch)
    link = "https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/dbSynGenes/SynGenes.xlsx"
    # Current working directory path (where the script where imported is located)
    cwd_path = os.getcwd()

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
        verbose = kwargs.get('verbose', False) # Get verbose from kwargs
        if not os.path.exists(
            f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
            ) or not os.path.isfile(
                f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
                ):
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"SynGenes database not found in {SynGenes.cwd_path}"
                    f"{TerminalColors.End}!\n"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Creating folder 'SynGenes' in {SynGenes.cwd_path}"
                    f"{TerminalColors.End}"
                    )
            try:
                os.makedirs(f'{SynGenes.cwd_path}/SynGenes', exist_ok=True, mode=0o777)
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Green}"
                        f"Folder 'SynGenes' was created successfully!\n"
                        f"{TerminalColors.End}"
                        )
            except PermissionError as e:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Fail}"
                        f"Error creating folder 'SynGenes'!"
                        f"Verify if you have permission to create folders in this directory."
                        f"{e}"
                        f"{TerminalColors.End}"
                        )
                sys.exit(1)
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f'{TerminalColors.Warning}'
                    f"Downloading SynGenes database, please wait..."
                    f'{TerminalColors.End}'
                    )
            file_name = f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
            download = requests.get(SynGenes.link, stream=True, timeout=30)
            if download.ok:
                with open(file_name, 'wb') as f:
                    for chunk in download.iter_content(chunk_size=1024*16):
                        if chunk:
                            f.write(chunk)
                            f.flush()
                            os.fsync(f.fileno())
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f'{TerminalColors.Green}'
                        f"Downloaded SynGenes database successfully!\n"
                        f'{TerminalColors.End}')
            else:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f'{TerminalColors.Fail}'
                        f'Download database failed: {download.status_code} - {download.text}'
                        f'{TerminalColors.End}'
                        )
                sys.exit(1)

    def update(self, **kwargs):
        """
        ### Download `SynGenes` database from GitHub repository (stable branch).
        This function downloads the SynGenes database from the
        GitHub repository (stable branch) and saves it in the SynGenes folder.
        ---
    
        Parameters:
            - `verbose (bool)`: Print messages (True or False). Default is False.

        Returns:
            - Downloaded SynGenes database in SynGenes folder.

        Note:
            - This function requires the 'requests' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> sg.update()
        ```
        """
        verbose = kwargs.get('verbose', False) # Get verbose from kwargs
        if os.path.exists(
            f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
            ) or os.path.isfile(
                f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
                ):
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"SynGenes database found in {SynGenes.cwd_path}"
                    f"{TerminalColors.End}!\n"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Removing old SynGenes database..."
                    f"{TerminalColors.End}"
                    )
            try:
                os.remove(f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx')
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Green}"
                        f"Old SynGenes database removed successfully!\n"
                        f"{TerminalColors.End}"
                        )
            except PermissionError as e:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Fail}"
                        f"Error removing old SynGenes database!"
                        f"Verify if you have permission to remove files in this directory."
                        f"{e}"
                        f"{TerminalColors.End}"
                        )
                sys.exit(1)
        else:
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"SynGenes database not found in {SynGenes.cwd_path}"
                    f"{TerminalColors.End}!\n"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Creating folder 'SynGenes' in {SynGenes.cwd_path}"
                    f"{TerminalColors.End}"
                    )
            try:
                os.makedirs('SynGenes', exist_ok=True, mode=0o777)
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Green}"
                        f"Folder 'SynGenes' created successfully!\n"
                        f"{TerminalColors.End}"
                        )
            except PermissionError as e:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Fail}"
                        f"Error creating folder 'SynGenes'!"
                        f"Verify if you have permission to create folders in this directory."
                        f"{e}"
                        f"{TerminalColors.End}"
                        )
                sys.exit(1)
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f'{TerminalColors.Warning}'
            f'Downloading SynGenes database, please wait...'
            f'{TerminalColors.End}'
            )
        file_name = f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx'
        download = requests.get(SynGenes.link, stream=True, timeout=30)
        if download.ok:
            with open(file_name, 'wb') as f:
                for chunk in download.iter_content(chunk_size=1024*16):
                    if chunk:
                        f.write(chunk)
                        f.flush()
                        os.fsync(f.fileno())
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f'{TerminalColors.Green}'
                    f'Downloaded SynGenes database successfully!\n'
                    f'{TerminalColors.End}'
                    )
        else:
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f'{TerminalColors.Fail}'
                    f'Download database failed: {download.status_code} - {download.text}'
                    f'{TerminalColors.End}'
                    )
            sys.exit(1)

    def fix_gene_name(self, **kwargs):
        """
        ### Fix Gene Name according to the `SynGenes` database.
        ---

        Parameters:
            - `geneName (str)`: The gene name to be corrected.
            - `type (str)`: Type of gene (mt = Mitochondrial, cp = Chloroplast). Default is mt.
            - `verbose (bool)`: Print messages (True or False). Default is False.

        Returns:
            - `ShortName (str)`: Fixed gene name.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> _geneName = sg.fix_gene_name(geneName='cytochrome c oxidase subunit I', type='mt')
        >>> print(_geneName)
        'COI'
        """
        full_name = kwargs.get('geneName', '')      # Get geneName from kwargs
        organelle = kwargs.get('type', 'mt')        # Get type from kwargs
        verbose = kwargs.get('verbose', False)     # Get verbose from kwargs

        if organelle == 'mt': # mt = Mitochondrial
            df = pd.DataFrame(
                pd.read_excel(
                    f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx',
                    sheet_name="Mitochondrial", dtype=str)).reset_index()
        elif organelle == 'cp': # cp = Chloroplast
            df = pd.DataFrame(
                pd.read_excel(
                    f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx',
                    sheet_name="Chloroplast", dtype=str)).reset_index()
        else:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Fail}"
                f"Error! Organelle {organelle} not found in SynGenes database!"
                f"{TerminalColors.End}"
                )
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Please, insert a valid type!"
                f"mt for Mitochondrial or cp for Chloroplast"
                f"{TerminalColors.End}"
                )
            sys.exit(1)
        list_full_name = df['Full Name'].values.tolist()  # Convert DataFrame column to list
        list_short_name = df['Short Name'].values.tolist()  # Convert DataFrame column to list
        if verbose:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Searching for '{full_name}' in SynGenes database..."
                f"{TerminalColors.End}"
                )
        if full_name in list_full_name:
            local = list_full_name.index(full_name)
            short_name = list_short_name[local]
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Green}"
                    f"Gene '{full_name}' found in SynGenes database!"
                    f"{TerminalColors.End}"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Gene '{full_name}' renamed to '{short_name}'!"
                    f"{TerminalColors.End}"
                    )
        else:
            short_name = full_name # If FullName not found in ListFullName, ShortName = FullName
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Fail}"
                    f"'{short_name}' not found in SynGenes database!"
                    f"{TerminalColors.End}"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Adding '{short_name}' to SynGenes.log"
                    f"{TerminalColors.End}"
                    )
            with open(f"{SynGenes.cwd_path}SynGenes.log", "a+", encoding="utf-8") as f:
                f.write(f"{short_name}\n")
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Green}"
                    f"Gene '{short_name}' added to SynGenes.log"
                    f"{TerminalColors.End}"
                    )
        return str(short_name)

    def build_query(self, **kwargs):
        """
        ### Build a `query` for Entrez search.
        ---
        Parameters:
            - `geneName (str)`: Gene name to search. 
            - Gene Name must be in the correct format, use the function fix_gene_name() to fix.
            - `type (str)`: Type of gene (mt = Mitochondrial, cp = Chloroplast). Default is mt.
            - `searchType (str)`: Type of search (Title, Abstract, All Fields, MeSH Terms)
            - `verbose (bool)`: Print messages (True or False). Default is False.

        Returns:
            - `query (str)`: Query for Entrez search in GenBank or PubMed.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> query = sg.build_query(
                    geneName='cytochrome c oxidase subunit I',
                    type='mt',
                    searchType='Title'
                    )
        >>> print(query)
        '"COI"[Title] OR "cytochrome c oxidase subunit I"[Title]...'
        ```
        """
        list_genes_mt = [
            "12S", "16S",
            "ATP6", "ATP8",
            "COI", "COII", "COIII",
            "CYTB",
            "ND1", "ND2", "ND3", "ND4", "ND4L", "ND5", "ND6",
            "Control Region"
            ]
        list_genes_cp = [
            'accD', 'atpA', 'atpB', 'atpE', 'atpF', 'atpH',
            'atpI', 'ccsA', 'cemA', 'chlB', 'chlL', 'chlN',
            'clpP', 'clpP1', 'cysA', 'cysT', 'ftsH', 'infA',
            'lhbA', 'matK', 'matk', 'ndhA', 'ndhB', 'ndhC',
            'ndhD', 'ndhE', 'ndhF', 'ndhG', 'ndhH', 'ndhI',
            'ndhJ', 'ndhK', 'pafI', 'pafII', 'pbf1', 'petA',
            'petB', 'petD', 'petE', 'petG', 'petL', 'petN',
            'psaA', 'psaB', 'psaC', 'psaI', 'psaJ', 'psaM',
            'psb30', 'psbA', 'psbB', 'psbC', 'psbD', 'psbE',
            'psbF', 'psbG', 'psbH', 'psbI', 'psbJ', 'psbK',
            'psbL', 'psbM', 'psbN', 'psbT', 'psbZ', 'rbcL',
            'rpl14', 'rpl16', 'rpl2', 'rpl20', 'rpl21',
            'rpl22', 'rpl23', 'rpl32', 'rpl33', 'rpl36',
            'rpoA', 'rpoB', 'rpoC1', 'rpoC2', 'rps11',
            'rps12', 'rps14', 'rps15', 'rps16', 'rps18',
            'rps19', 'rps2', 'rps3', 'rps4', 'rps7', 'rps8',
            'rrn16S', 'rrn23S', 'rrn4.5S', 'rrn5S', 'ycf1', 
            'ycf12', 'ycf15', 'ycf2', 'ycf3', 'ycf4'
            ]
        list_types = ["Title", "Abstract", "All Fields", "MeSH Terms"]

        list_query = []
        gene_name = str(kwargs.get('geneName', ''))
        organelle = str(kwargs.get('type', "mt"))
        str_types = str(kwargs.get('searchType', "All Fields"))
        verbose = kwargs.get('verbose', False)

        if gene_name in list_genes_mt or gene_name in list_genes_cp:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Gene '{gene_name}' is already in the correct format!"
                f"{TerminalColors.End}"
                )
            if organelle == 'mt':
                _file       = pd.read_excel(f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx', sheet_name='Mitochondrial')
            elif organelle == 'cp':
                _file       = pd.read_excel(f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx', sheet_name='Chloroplast')
            else:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Fail}"
                    f"Please, insert a valid type! mt for Mitochondrial or cp for Chloroplast"
                    f"{TerminalColors.End}"
                    )
                sys.exit(1)
            if str_types in list_types:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Warning}"
                        f"Type '{str_types}' is already in the correct format!"
                        f"{TerminalColors.End}"
                        )
                else:
                    if verbose:
                        print(
                            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                            f"{TerminalColors.Warning}"
                            f"Type '{str_types}' is not in the correct format!"
                            f"{TerminalColors.End}"
                            )
                        print(
                            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                            f"{TerminalColors.Warning}"
                            f"Correct format is {list_types}"
                            f"{TerminalColors.End}"
                            )
                    sys.exit(1)
                for index, row in _file.iterrows():
                    if row['Short Name'] == gene_name and row['Short Name'] not in list_query:
                        if verbose:
                            print(
                                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                                f"{TerminalColors.Warning}"
                                f"{index}: Searching for '{gene_name}' in SynGenes database..."
                                f"{TerminalColors.End}"
                                )
                        full_name = row['Full Name']
                        list_query.append(f'"{full_name}"[{str_types}]')
            else:
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Warning}"
                        f"Type '{str_types}' is not in the correct format!"
                        f"{TerminalColors.End}"
                        )
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Warning}"
                        f"Correct format is {list_types}"
                        f"{TerminalColors.End}"
                        )
                sys.exit(1)
        else:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Gene '{gene_name}' is not in the correct format!"
                f"{TerminalColors.End}"
                )
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Correct format is {list_genes_mt} to Mitochondrial genes!"
                f"{TerminalColors.End}"
                )
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Correct format is {list_genes_cp} to Chloroplast genes!"
                f"{TerminalColors.End}"
                )
            sys.exit(1)
        if len(list_query) > 0: # Check if _listQuery is not empty
            data = ' OR '.join(list_query) # Return query for Entrez search in GenBank or PubMed
        else:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"No results found for '{gene_name}' in SynGenes database!"
                f"{TerminalColors.End}"
                )
            data = ""
        return data # Return empty string

    def build_json(self, **kwargs):
        """
        ### Build a JSON file with the data of SynGenes database.
        ---
        Parameters:
            - `fileName (str)`: Name of the JSON file. Default is SynGenes.js
            - `pathSaveFile (str)`: Path to save the JSON file.
            Default is SynGenes folder, in the current working directory.
            - `verbose (bool)`: Print messages (True or False). Default is False.

        Returns:
            - `SynGenes.js` file in SynGenes folder.

        Note:
            - This function requires the 'pandas' library to be imported.
            - The `SynGenes` database is available at github.com/luanrabelo/SynGenes.

        Example:
        ```python
        >>> from SynGenes import SynGenes
        >>> sg = SynGenes()
        >>> sg.build_json()
        ```
        """
        list_data = []
        file_name = kwargs.get('fileName', 'SynGenes.js')
        path_save_file = kwargs.get('pathSaveFile', f'{SynGenes.cwd_path}')
        verbose = kwargs.get('verbose', False)
        list_genes_mt = [
            "12S", "16S",
            "ATP6", "ATP8",
            "COI", "COII", "COIII",
            "CYTB",
            "ND1", "ND2", "ND3", "ND4", "ND4L", "ND5", "ND6",
            "Control Region"
            ]
        list_genes_cp = [
            'accD', 'atpA', 'atpB', 'atpE', 'atpF', 'atpH',
            'atpI', 'ccsA', 'cemA', 'chlB', 'chlL', 'chlN',
            'clpP', 'clpP1', 'cysA', 'cysT', 'ftsH', 'infA',
            'lhbA', 'matK', 'matk', 'ndhA', 'ndhB', 'ndhC',
            'ndhD', 'ndhE', 'ndhF', 'ndhG', 'ndhH', 'ndhI',
            'ndhJ', 'ndhK', 'pafI', 'pafII', 'pbf1', 'petA',
            'petB', 'petD', 'petE', 'petG', 'petL', 'petN',
            'psaA', 'psaB', 'psaC', 'psaI', 'psaJ', 'psaM',
            'psb30', 'psbA', 'psbB', 'psbC', 'psbD', 'psbE',
            'psbF', 'psbG', 'psbH', 'psbI', 'psbJ', 'psbK',
            'psbL', 'psbM', 'psbN', 'psbT', 'psbZ', 'rbcL',
            'rpl14', 'rpl16', 'rpl2', 'rpl20', 'rpl21',
            'rpl22', 'rpl23', 'rpl32', 'rpl33', 'rpl36',
            'rpoA', 'rpoB', 'rpoC1', 'rpoC2', 'rps11',
            'rps12', 'rps14', 'rps15', 'rps16', 'rps18',
            'rps19', 'rps2', 'rps3', 'rps4', 'rps7', 'rps8',
            'rrn16S', 'rrn23S', 'rrn4.5S', 'rrn5S', 'ycf1', 
            'ycf12', 'ycf15', 'ycf2', 'ycf3', 'ycf4'
            ]
        if verbose:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f"{TerminalColors.Warning}"
                f"Creating JSON file..."
                f"{TerminalColors.End}"
                )
        if os.path.exists(
            f'{path_save_file}/{file_name}'
            ) or os.path.isfile(
                f'{path_save_file}/{file_name}'
                ):
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"JSON file found in {path_save_file}"
                    f"{TerminalColors.End}!\n"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Removing old JSON file..."
                    f"{TerminalColors.End}"
                    )
            try:
                os.remove(f'{path_save_file}/{file_name}')
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Green}"
                        f"Old JSON file removed successfully!\n"
                        f"{TerminalColors.End}"
                        )
            except PermissionError as e:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Fail}"
                    f"Error removing old JSON file!"
                    f"{e}"
                    f"Verify if you have permission to remove files in this directory."
                    f"{TerminalColors.End}"
                    )
                sys.exit(1)
        else:
            if verbose:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"JSON file not found in {path_save_file}"
                    f"{TerminalColors.End}!\n"
                    )
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Warning}"
                    f"Creating folder 'json' in {path_save_file}"
                    f"{TerminalColors.End}"
                    )
            try:
                os.makedirs(f'{path_save_file}', exist_ok=True, mode=0o777)
                if verbose:
                    print(
                        f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                        f"{TerminalColors.Green}"
                        f"Folder 'json' created successfully!\n"
                        f"{TerminalColors.End}"
                        )
            except PermissionError as e:
                print(
                    f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                    f"{TerminalColors.Fail}"
                    f"Error creating folder 'json'!"
                    f"Verify if you have permission to create folders in this directory."
                    f"{e}"
                    f"{TerminalColors.End}"
                    )
                sys.exit(1)
        if verbose:
            print(
                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                f'{TerminalColors.Warning}'
                f"Creating JSON file in {path_save_file}, please wait..."
                f"{TerminalColors.End}"
                )
        with open(f'{path_save_file}/{file_name}', 'a+', encoding='utf-8') as f:
            f.write('const MitochondrialGenes = {\n')
            file = pd.read_excel(f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx', sheet_name='Mitochondrial')
            for i in list_genes_mt:
                for index, row in file.iterrows():
                    if row['Short Name'] == i:
                        if verbose:
                            print(
                                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                                f"{TerminalColors.Warning}"
                                f"{index}: Searching for '{i}' in SynGenes database..."
                                f"{TerminalColors.End}"
                                )
                        list_data.append(row['Full Name'])
                f.write(f'"{i}": {list_data},\n')
                list_data.clear()
            f.write('};\n\n')

            f.write('const ChloroplastGenes = {\n')
            file = pd.read_excel(f'{SynGenes.cwd_path}/SynGenes/SynGenes.xlsx', sheet_name='Chloroplast')
            for i in list_genes_cp:
                for index, row in file.iterrows():
                    if row['Short Name'] == i:
                        if verbose:
                            print(
                                f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
                                f"{TerminalColors.Warning}"
                                f"{index}: Searching for '{i}' in SynGenes database..."
                                f"{TerminalColors.End}"
                                )
                        list_data.append(row['Full Name'])
                f.write(f'"{i}": {list_data},\n')
                list_data.clear()
            f.write('};\n\n')
            # Write date to JSON file
            _date = time.strftime("%Y/%m/%d - %H:%M:%S")
            f.write(f'const updateDate = "{_date}"\n')
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f'{TerminalColors.Green}'
            f'JSON file created successfully!\n'
            f'{TerminalColors.End}'
            )

    def cite_syngenes(self):
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
        >>> howCite = sg.cite_syngenes()
        >>> print(howCite)
        ''
        ```
        """
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Bold}"
            f"Please, cite the SynGenes database as:"
            f"Rabelo, L.P., Sodré, D., de Sousa, R.P.C. et al. "
            f"SynGenes: a Python class for standardizing nomenclatures of "
            f"mitochondrial and chloroplast genes and a web form for enhancing searches "
            f"for evolutionary analyses. BMC Bioinformatics 25, 160 (2024). "
            f"https://doi.org/10.1186/s12859-024-05781-y"
            f"{TerminalColors.End}"
            )

    def version_syngenes(self):
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
        >>> version = sg.version_syngenes()
        >>> print(version)
        '1.0'
        ```
        """
        print(
            f"{time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}: "
            f"{TerminalColors.Warning}"
            f"SynGenes: version {__version__}"
            f"{TerminalColors.End}"
            )
