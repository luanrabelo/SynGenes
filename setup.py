from setuptools import setup

with open("README.md", "r", encoding="utf-8") as fh:
    Readme = fh.read()

setup(
    name = 'SynGenes',
    version = '1.1.0',
    description = (
        'SynGenes is a Python class for standardizing mitochondrial/chloroplast gene nomenclatures.'
        ),
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
    install_requires=['requests', 'pandas', 'openpyxl'],
    classifiers= [
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Science/Research",
        "Environment :: Web Environment",
        "Topic :: Scientific/Engineering :: Bio-Informatics",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.7",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: POSIX :: Linux",
    ],
    )