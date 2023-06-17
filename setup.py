from setuptools import setup

with open("README.md", "r") as fh:
    Readme = fh.read()

setup(
    name = 'SynGenes',
    version = '1.0.2',
    description = 'SynGenes is a Python class for standardizing gene nomenclatures, this class is capable of recognizing and converting the different nomenclature variations into a standardized form.',
    long_description = Readme,
    long_description_content_type="text/markdown",
    author = 'Luan Rabelo',
    author_email = 'luanrabelo@outlook.com',
    maintainer = 'Luan Rabelo',
    maintainer_email = 'luanrabelo@outlook.com',
    url='https://github.com/luanrabelo/SynGenes',
    download_url='https://github.com/luanrabelo/SynGenes',
    packages=['SynGenes'],
    license='MIT License',
    keywords='SynGenes Genes Bioinformatics Synonymous',
    install_requires=['requests', 'pandas', 'openpyxl'],)