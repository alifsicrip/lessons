# ⚡ Installation rapide - IFSI CRIP Site

## 🎯 En 5 minutes chrono !

### Étape 1️⃣ : Télécharger les fichiers (30 secondes)

Téléchargez tous ces fichiers dans votre dépôt GitHub `lessons` :

```
✅ index.html
✅ styles.css
✅ script.js
✅ README.md
✅ GUIDE_UTILISATION.md
✅ DEPLOYMENT.md
✅ QUICK_START.md (ce fichier)
✅ _config.yml
✅ .gitignore
✅ template-ue.html
```

---

### Étape 2️⃣ : Uploader sur GitHub (2 minutes)

#### Option A : Via l'interface GitHub (plus simple)

1. Allez sur https://github.com/alifsicrip/lessons
2. Cliquez sur **Add file** > **Upload files**
3. Glissez-déposez tous les fichiers
4. Écrivez un message : `Initial setup - IFSI CRIP site`
5. Cliquez sur **Commit changes**

#### Option B : Via Git (ligne de commande)

```bash
# Cloner le dépôt
git clone https://github.com/alifsicrip/lessons.git
cd lessons

# Copier tous vos fichiers dans ce dossier

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial setup - IFSI CRIP site"

# Push
git push origin main
```

---

### Étape 3️⃣ : Activer GitHub Pages (1 minute)

1. Allez dans **Settings** de votre dépôt
2. Menu latéral > **Pages**
3. Source > **Branch: main** > **Folder: / (root)**
4. **Save**

🎉 **C'est tout !** Attendez 2-3 minutes...

---

### Étape 4️⃣ : Vérifier le site (1 minute)

Votre site est maintenant accessible sur :
```
https://alifsicrip.github.io/lessons/
```

**Checklist de vérification :**
- [ ] La page d'accueil s'affiche
- [ ] Le menu latéral fonctionne
- [ ] La barre de recherche fonctionne
- [ ] Les boutons de zoom fonctionnent
- [ ] Le design correspond aux couleurs du logo

---

## 📁 Structure des dossiers à créer

### Maintenant, créez vos dossiers UE :

#### Via GitHub (interface web)
1. Cliquez sur **Add file** > **Create new file**
2. Tapez : `UE1-1/README.md`
3. Dans le contenu, écrivez : `# UE 1.1 - Documents`
4. Commit
5. Répétez pour chaque UE

#### Via Git (ligne de commande)
```bash
# Créer tous les dossiers d'un coup
mkdir -p UE{1..5}-{1..8}

# Ou créer manuellement par catégorie :

# Sciences Humaines
mkdir UE1-1 UE1-2 UE1-3

# Sciences Biologiques
mkdir UE2-1 UE2-2 UE2-3 UE2-4 UE2-5 UE2-6 UE2-7 UE2-8 UE2-9 UE2-10 UE2-11

# Sciences Infirmières
mkdir UE3-1 UE3-2 UE3-3 UE3-4 UE3-5

# Méthodes et Techniques
mkdir UE4-1 UE4-2 UE4-3 UE4-4 UE4-5 UE4-6 UE4-7 UE4-8

# Intégration
mkdir UE5-1 UE5-2 UE5-3 UE5-4 UE5-5 UE5-6 UE5-7 UE5-8

# Ajouter un README dans chaque dossier
for dir in UE*/; do echo "# ${dir%/} - Documents" > "$dir/README.md"; done

# Commit tout
git add .
git commit -m "Create UE folders structure"
git push origin main
```

---

## 📄 Ajouter votre premier document

### Exemple : Ajouter un cours dans UE 2.1

#### Méthode 1 : Via GitHub
1. Allez dans le dossier `UE2-1`
2. Cliquez sur **Add file** > **Upload files**
3. Uploadez votre PDF
4. Commit

#### Méthode 2 : Via Git
```bash
# Copier le fichier
cp ~/Downloads/cours-biologie.pdf UE2-1/

# Add, commit, push
git add UE2-1/cours-biologie.pdf
git commit -m "Add: Cours de biologie fondamentale"
git push origin main
```

### Mettre à jour le site pour afficher le document

Éditez le fichier `script.js` :

Trouvez la section `'ue2-1':` et ajoutez votre document :

```javascript
'ue2-1': {
    title: 'UE 2.1 - Biologie fondamentale',
    description: '...',
    credits: '3 ECTS',
    semester: 'S1',
    icon: '🧬',
    documents: [
        { 
            name: 'Cours de biologie fondamentale', 
            type: 'pdf', 
            size: '2.4 MB',
            path: 'UE2-1/cours-biologie.pdf'  // Ajoutez le chemin
        }
        // Ajoutez d'autres documents ici
    ]
}
```

Puis commit et push :
```bash
git add script.js
git commit -m "Update: Add biology course to UE 2.1"
git push origin main
```

---

## 🎨 Personnalisation rapide

### Changer le titre
Éditez `index.html` ligne 5 :
```html
<title>IFSI CRIP - Votre Nom 2025</title>
```

### Changer les informations d'en-tête
Éditez `index.html` lignes 15-17 :
```html
<h1>📚 IFSI CRIP</h1>
<p class="subtitle">Votre Nom - 2025</p>
```

### Ajouter votre photo/logo
1. Ajoutez votre image : `logo.png`
2. Éditez `index.html` pour ajouter :
```html
<img src="logo.png" alt="Logo" style="width: 50px;">
```

---

## 🔧 Commandes essentielles

### Mettre à jour le site

```bash
# 1. Récupérer les dernières modifs
git pull origin main

# 2. Faire vos modifications...

# 3. Voir ce qui a changé
git status

# 4. Tout ajouter
git add .

# 5. Commit avec message clair
git commit -m "Update: Description de vos modifications"

# 6. Envoyer en ligne
git push origin main

# 7. Attendre 2-3 minutes et vérifier sur :
# https://alifsicrip.github.io/lessons/
```

### Annuler des modifications

```bash
# Annuler les modifications non commit
git checkout -- fichier.txt

# Annuler le dernier commit (attention !)
git reset --soft HEAD~1

# Voir l'historique
git log --oneline
```

---

## 📱 Tester en local (optionnel)

### Avec Python (déjà installé sur Mac/Linux)
```bash
cd lessons
python -m http.server 8000
# Ouvrez : http://localhost:8000
```

### Avec Node.js
```bash
npx http-server
# Ouvrez : http://localhost:8080
```

### Avec VS Code
1. Installez l'extension "Live Server"
2. Clic droit sur `index.html` > **Open with Live Server**

---

## ✅ Checklist finale

Avant de partager votre site, vérifiez :

- [ ] Le site est accessible : https://alifsicrip.github.io/lessons/
- [ ] Le titre et les informations sont corrects
- [ ] Le menu latéral fonctionne
- [ ] La recherche fonctionne
- [ ] Les couleurs correspondent au logo
- [ ] Le site est responsive (testez sur mobile)
- [ ] Au moins 1 document est visible dans une UE (pour tester)
- [ ] Les liens du README sont corrects

---

## 🆘 Problèmes courants

### ❌ Page 404
**Cause :** GitHub Pages pas activé ou mauvaise branche
**Solution :** Retournez dans Settings > Pages et vérifiez

### ❌ CSS ne s'applique pas
**Cause :** Cache du navigateur
**Solution :** Ctrl+F5 (ou Cmd+Shift+R sur Mac)

### ❌ Les modifications n'apparaissent pas
**Cause :** GitHub Pages met du temps
**Solution :** Attendez 5 minutes, videz le cache

### ❌ Erreur Git
**Cause :** Conflits ou problèmes de connexion
**Solution :** 
```bash
git pull origin main
# Résolvez les conflits si nécessaire
git add .
git commit -m "Fix: Merge conflicts"
git push origin main
```

---

## 📞 Aide

**Documentation complète :** Lisez `DEPLOYMENT.md`

**Guide utilisateur :** Lisez `GUIDE_UTILISATION.md`

**README général :** Lisez `README.md`

**Support :**
- GitHub Docs : https://docs.github.com/pages
- Git Guide : https://git-scm.com/book/fr/v2

---

## 🎉 Félicitations !

Votre site IFSI est maintenant en ligne ! 

**Prochaines étapes :**
1. ✅ Ajoutez progressivement vos documents
2. ✅ Mettez à jour régulièrement
3. ✅ Partagez le lien avec vos collègues
4. ✅ Consultez `GUIDE_UTILISATION.md` pour les fonctionnalités avancées

**Lien à partager :**
```
🔗 https://alifsicrip.github.io/lessons/
```

---

💙 **Bon courage pour vos études !**

*Questions ? Consultez la documentation ou contactez votre promo*