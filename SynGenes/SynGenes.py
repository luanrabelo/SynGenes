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
    print(f"{TerminalColors.Fail}Module 'Requests' not found, please install it with: python3 -m pip install -U requests{TerminalColors.End}")
    print(f"{TerminalColors.Warning}{TerminalColors.Underline}Do you want to install it now? (yes/no){TerminalColors.End}")
    Choice = str(input())
    if Choice.lower() == 'y' or Choice.lower() == 'yes':
        os.system('python3 -m pip install -U requests')
        print(f"{TerminalColors.Green}Module 'Requests' installed successfully!{TerminalColors.End}")
        try:
            import requests
            print(f"{TerminalColors.Green}Module 'Requests' found and imported!{TerminalColors.End}")
        except ImportError:
            print(f"{TerminalColors.Fail}Module 'Requests' not found, please reinstall it with: python3 -m pip install -U requests{TerminalColors.End}")
            sys.exit()
    else:
        print(f"{TerminalColors.Fail}Installation 'Requests' aborted!{TerminalColors.End}")

try:
    import pandas as pd
    print(f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}")
except ImportError:
    print(f"{TerminalColors.Fail}Module 'Pandas' not found, please install it with: python3 -m pip install -U pandas{TerminalColors.End}")
    print(f"{TerminalColors.Warning}{TerminalColors.Underline}Do you want to install it now? (yes/no){TerminalColors.End}")
    Choice = str(input())
    if Choice.lower() == 'y' or Choice.lower() == 'yes':
        os.system('python3 -m pip install -U pandas')
        print(f"{TerminalColors.Green}Module 'Pandas' installed successfully!{TerminalColors.End}")
        try:
            import pandas as pd
            print(f"{TerminalColors.Green}Module 'Pandas' found and imported!{TerminalColors.End}")
        except ImportError:
            print(f"{TerminalColors.Fail}Module 'Pandas' not found, please reinstall it with: python3 -m pip install -U pandas{TerminalColors.End}")
            sys.exit()
    else:
        print(f"{TerminalColors.Fail}Installation 'Pandas' aborted!{TerminalColors.End}")

class SynGenes:
    dataLink = "https://raw.githubusercontent.com/luanrabelo/SynGenes/stable/dbSynGenes/SynGenes.xlsx" # Link to SynGenes database in GitHub repository (stable branch)
    cwdPath  = os.getcwd() # Current working directory path (where the script is running)
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
    
    def __init__(self):
        """
        SynGenes: A Python class to download and update SynGenes database.

        Parameters
        ----------

        """
        
        if not os.path.exists(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx') or not os.path.isfile(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'):
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}SynGenes database not found in {SynGenes.cwdPath}{SynGenes.TerminalColors.End}!\n")
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Creating folder 'SynGenes' in {SynGenes.cwdPath}{SynGenes.TerminalColors.End}")
            try:
                os.makedirs(f'{SynGenes.cwdPath}/SynGenes', exist_ok=True, mode=0o777)
                print(f"{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Folder 'SynGenes' created successfully ({time.strftime('%Y/%m/%d - %H:%M:%S')})!\n{SynGenes.TerminalColors.End}")
            except:
                print(f"{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Error creating folder 'SynGenes'! Verify if you have permission to create folders in this directory.{SynGenes.TerminalColors.End}")
                sys.exit()
            print(f'{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Downloading SynGenes database from https://github.com/luanrabelo/SynGenes, please wait...{SynGenes.TerminalColors.End}')
            FileName = f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'
            download = requests.get(SynGenes.dataLink, stream=True)
            if download.ok:
                with open(FileName, 'wb') as f:
                    for chunk in download.iter_content(chunk_size=1024*16):
                        if chunk:
                            f.write(chunk)
                            f.flush()
                            os.fsync(f.fileno())
                print(f'{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Downloaded SynGenes database successfully ({time.strftime("%Y/%m/%d - %H:%M:%S")})!\n{SynGenes.TerminalColors.End}')
            else:
                print(f'{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Download SynGenes database failed: status code {download.status_code} - {download.text}{SynGenes.TerminalColors.End}')
                sys.exit()

    def updateSynGenes(self):
        if os.path.exists(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx') or os.path.isfile(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'):
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}SynGenes database found in {SynGenes.cwdPath}{SynGenes.TerminalColors.End}!\n")
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Removing old SynGenes database...{SynGenes.TerminalColors.End}")
            try:
                os.remove(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx')
                print(f"{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Old SynGenes database removed successfully!\n{SynGenes.TerminalColors.End}")
            except:
                print(f"{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Error removing old SynGenes database! Verify if you have permission to remove files in this directory.{SynGenes.TerminalColors.End}")
                sys.exit()
        else:
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}SynGenes database not found in {SynGenes.cwdPath}{SynGenes.TerminalColors.End}!\n")
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Creating folder 'SynGenes' in {SynGenes.cwdPath}{SynGenes.TerminalColors.End}")
            try:
                os.makedirs('SynGenes', exist_ok=True, mode=0o777)
                print(f"{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Folder 'SynGenes' created successfully ({time.strftime('%Y/%m/%d - %H:%M:%S')})!\n{SynGenes.TerminalColors.End}")
            except:
                print(f"{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Error creating folder 'SynGenes'! Verify if you have permission to create folders in this directory.{SynGenes.TerminalColors.End}")
                sys.exit()
        print(f'{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Downloading SynGenes database from https://github.com/luanrabelo/SynGenes, please wait...{SynGenes.TerminalColors.End}')
        file_name = f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx'
        download = requests.get(SynGenes.dataLink, stream=True)
        if download.ok:
            with open(file_name, 'wb') as f:
                for chunk in download.iter_content(chunk_size=1024*16):
                    if chunk:
                        f.write(chunk)
                        f.flush()
                        os.fsync(f.fileno())
            print(f'{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Downloaded SynGenes database successfully ({time.strftime("%Y/%m/%d - %H:%M:%S")})!\n{SynGenes.TerminalColors.End}')
        else:
            print(f'{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Download SynGenes database failed: status code {download.status_code} - {download.text}{SynGenes.TerminalColors.End}')
            sys.exit()

    def FixGeneName(self, **kwargs):
        GeneList = []
        GeneList.clear()
        FullName  = str(kwargs['geneName'])
        Organelle = str(kwargs['type'])
        if Organelle == 'mt':
            df = pd.DataFrame(pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name="Mitochondrial", dtype=str)).reset_index()
        elif Organelle == 'cp':
            df = pd.DataFrame(pd.read_excel(f'{SynGenes.cwdPath}/SynGenes/SynGenes.xlsx', sheet_name="Chloroplast", dtype=str)).reset_index()
        else:
            print(f"{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}Error! Organelle {Organelle} not found in SynGenes database!{SynGenes.TerminalColors.End}")
            sys.exit()
        ListFullName  = df['Full Name'].values.tolist()
        ListShortName = df['Short Name'].values.tolist()
        print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Searching for '{FullName}' in SynGenes database...{SynGenes.TerminalColors.End}")
        if FullName in ListFullName:
            Local  = ListFullName.index(FullName)
            ShortName = ListShortName[Local]
            print(f"{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Gene '{FullName}' found in SynGenes database!{SynGenes.TerminalColors.End}")
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Gene '{FullName}' renamed to '{ShortName}'!{SynGenes.TerminalColors.End}")
        else:
            ShortName = FullName
            print(f"{SynGenes.TerminalColors.Fail}{SynGenes.TerminalColors.Bold}'{ShortName}' not found in SynGenes database{SynGenes.TerminalColors.End}")
            print(f"{SynGenes.TerminalColors.Warning}{SynGenes.TerminalColors.Bold}Adding '{ShortName}' to SynGenes.log{SynGenes.TerminalColors.End}")
            f = open(f"{SynGenes.cwdPath}SynGenes.log", "a+")
            f.write(f"{ShortName}\n")
            f.close()
            print(f"{SynGenes.TerminalColors.Green}{SynGenes.TerminalColors.Bold}Gene '{ShortName}' added to SynGenes.log{SynGenes.TerminalColors.End}")
        ListFullName.clear()
        ListShortName.clear()
        return str(ShortName)