# MERN-Project-Template

A brief description of what this project does and who it's for.

## Installation

Instructions on how to set up the project locally.

```sh
git clone https://github.com/yourusername/project-name.git
cd project-name
docker-compose up --build

## Usage

Here is an example of how to use this project:

```sh
npm install
npm start
```

Make sure to install the required dependencies and start the project using the provided npm scripts.

---

## Configuration de l'Environnement

Avant de démarrer le projet, suivez ces étapes pour configurer les variables d'environnement du backend :

### Backend

1. **Copiez et renommez le fichier `.env.example` :**
   ```bash
   cp server/.env.example server/.env
   ```

2. **Ouvrez le fichier `.env` nouvellement créé :**
   - Vous trouverez des lignes commentées (#) avec des instructions pour chaque variable d'environnement.

3. **Décommentez et configurez les variables d'environnement :**
   - **NODE_ENV**: Décommentez et définissez à `development`, `test`, ou `production` selon l'environnement :
     ```env
     NODE_ENV=development
     ```
   - **APP_NAME**: Décommentez et indiquez le nom de votre application :
     ```env
     APP_NAME=HappiHub
     ```
   - **APP_URL**: Décommentez et fournissez l'URL où votre application est accessible :
     ```env
     APP_URL=http://localhost:5000
     ```
   - **PORT**: Décommentez et spécifiez le port sur lequel l'application doit écouter :
     ```env
     PORT=5000
     ```
   - **Database Settings**: Décommentez et configurez les informations de connexion pour chaque environnement (développement, test, production). Par exemple, pour le développement :
     ```env
     DEV_DB_HOST=localhost
     DEV_DB_USER=dev_user
     DEV_DB_PASS=dev_pass
     DEV_DB_NAME=happihub_dev
     ```
     - **DEV_DB_HOST**: Adresse de l'hôte de la base de données de développement.
     - **DEV_DB_USER**: Nom d'utilisateur pour la base de données de développement.
     - **DEV_DB_PASS**: Mot de passe pour l'utilisateur de la base de données de développement.
     - **DEV_DB_NAME**: Nom de la base de données de développement.

     Répétez pour les variables **TEST_DB_HOST**, **TEST_DB_USER**, **TEST_DB_PASS**, **TEST_DB_NAME** pour les tests, et **PROD_DB_HOST**, **PROD_DB_USER**, **PROD_DB_PASS**, **PROD_DB_NAME** pour la production.

4. **Sauvegardez le fichier** après avoir configuré toutes les variables selon les besoins de votre environnement.

### Remarques Importantes :
- **Ne partagez pas le fichier `.env`** contenant des informations sensibles comme les mots de passe ou les clés API dans le dépôt de code source (assurez-vous qu'il est inclus dans `.gitignore`).
- **Assurez-vous que `NODE_ENV`** correspond bien à l'environnement courant pour éviter toute confusion ou erreur de configuration.

Ces instructions garantissent que chaque développeur configure correctement l'environnement pour le développement, les tests et la production, en utilisant le même fichier `.env` tout en ajustant les paramètres spécifiques à chaque cas.

## Contributing

We welcome contributions from the community! If you would like to contribute to this project, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your contribution.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your forked repository.
5. Open a pull request to the main repository, explaining your changes and why they should be merged.

Please ensure that your contributions adhere to our [code of conduct](link-to-code-of-conduct) and are in line with the project's goals and guidelines.

Thank you for your contribution!

## License

This project is licensed under the MIT License - see the [LICENSE](link-to-license-file) file for details.

## API Documentation

To access the API documentation, follow these steps:

1. Start the project locally by running the following command in your terminal:

```sh
npm start
```

2. Once the project is running, open your web browser and navigate to `http://localhost:3000/api-docs`.

You will then be able to view and interact with the API documentation, which provides detailed information about the available endpoints, request/response formats, and any required authentication.

Please note that the API documentation is only accessible when the project is running locally.
