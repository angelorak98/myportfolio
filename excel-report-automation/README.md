# Automatisation de Rapports Excel avec Python

Ce script Python démontre comment automatiser la création de rapports financiers à partir de données brutes. Il lit des données de ventes depuis un fichier CSV, effectue des analyses et des agrégations, puis génère un fichier Excel multi-feuilles bien formaté.

## Fonctionnalités

- **Génération de données d'exemple** : Crée un fichier `sales_data.csv` si aucun n'existe.
- **Lecture de données** : Utilise la bibliothèque `pandas` pour lire et manipuler les données.
- **Analyse de données** : Calcule le total des ventes et agrège les données par catégorie et par mois.
- **Rapport Multi-Feuilles** : Crée un fichier Excel avec plusieurs feuilles :
  - `Dashboard` : Un aperçu rapide des métriques clés.
  - `Summary by Category` : Un résumé des ventes par catégorie de produits.
  - `Monthly Sales` : Un résumé des ventes mensuelles.
  - `Raw Data` : Les données brutes originales.
- **Mise en Forme Automatique** : Applique des styles, ajuste la largeur des colonnes et formate les nombres en devise pour une meilleure lisibilité.

## Prérequis

- Python 3.6+
- Les bibliothèques Python listées dans `requirements.txt`.

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/angelorak98/excel-report-automation.git
   cd excel-report-automation
   ```

2. Installez les dépendances nécessaires :
   ```bash
   pip install -r requirements.txt
   ```

## Utilisation

Pour exécuter le script et générer le rapport, lancez simplement la commande suivante dans votre terminal :

```bash
python generate_report.py
```

Le script va :
1. Vérifier si `sales_data.csv` existe. Si non, il le créera.
2. Lire les données de `sales_data.csv`.
3. Générer un nouveau fichier nommé `financial_report.xlsx` dans le même répertoire.

## Personnalisation

Vous pouvez facilement adapter ce script à vos propres besoins :
- **Source de données** : Modifiez la variable `CSV_FILE` pour pointer vers votre propre fichier de données. Assurez-vous que votre fichier contient les colonnes nécessaires ou adaptez le code dans la fonction `create_excel_report` pour correspondre à votre structure de données.
- **Analyses** : Ajoutez vos propres logiques d'agrégation et de calcul dans la section "Data Aggregation".
- **Mise en forme** : Modifiez les styles et les formats appliqués en utilisant les objets `workbook` et `worksheet` de `openpyxl`.
