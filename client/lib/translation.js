angular.module('translation', ['pascalprecht.translate'])

    .config(['$translateProvider', 'translations', function ($translateProvider, translations) {

        translations = translations();

        $translateProvider.translations('nl', translations.nl);
        $translateProvider.translations('en', translations.en);
        $translateProvider.preferredLanguage('nl');
    }])

    .constant('translations', function () {
        var translations = {};
        translations.nl = {
            "Match failed": "Ongeldige combinatie",
            "Token expired": "Link verlopen",
            ABSENCE: "Absentie",
            ABSENT: "Absent",
            ACTIVATED: "Geactiveerd",
            ADD_MEMBER: "Voeg lid toe",
            ADD_MEMBER_SUBTITLE: "Voeg een clublid toe aan het ClubNet systeem.",
            ADD_MEMBER_TITLE: "Voeg lid toe",
            ADD_MEMBER_TYPE_TOOLTIP: "Het lid zal het gebruikerstype speler hebben als het gekoppeld is aan een team. Zo niet, zal het lid het gebruikerstype algemeen hebben.",
            ADD_USER: "Voeg gebruiker toe",
            BUTTON_SIGNOFF: "Afmelden",
            BUTTON_SIGNUP: "Aanmelden",
            BUTTON_CONTRIBUTE: "Verstuur",
            BUTTON_WITHDRAW: "Trek terug",
            PRESENT: "Je staat nu op 'aanwezig'.",
            NOTPRESENT: "Je staat nu op 'afwezig'.",
            CANCEL: "Annuleer",
            CHANGE_PASS: "Verander wachtwoord",
            CHANGE_PASS_SUCCESS: "Wachtwoord aangepast",
            CHAT_TITLE: "Gesprekken",
            CLOSE: "Sluiten",
            CLUB: "Club",
            CLUB_LOGO: "Clublogo",
            CLUB_NAME: "Clubnaam",
            CLUB_SETTINGS_SUBTITLE: "Verander instellingen voor de gehele club",
            CLUB_SETTINGS_TITLE: "Clubinstellingen",
            COLORS: "Kleuren",
            CONFIRM_DELETE: "Weet je zeker dat je het item wil verwijderen?",
            CONFIRM_PASS: "Bevestig wachtwoord",
            CONFIRM_VOTE: "Bevestig stem",
            CONTRIBUTE: "Meld aan",
            CONTRIBUTION: "Contributie",
            CURRENT_PASS: "Huidig wachtwoord",
            DAILY: "Dagelijks",
            DEADLINE: "Deadline",
            DELETE: "Verwijder",
            DELETE_MESSAGE: "Weet je zeker dat je de deze gebruiker wilt verwijderen: ",
            DELETE_TITLE: "Weet je het zeker?",
            DESCRIPTION: "Beschrijving",
            DRIVING: "Vervoer",
            DUTCH: "Nederlands",
            EDIT: "Wijzig",
            EDIT_MEMBER_SUBTITLE: "Wijzig een clublid in het ClubNet systeem.",
            EDIT_MEMBER_TITLE: "Wijzig lid",
            EMAIL: "Email adres",
            EMAIL_IN_USE: "Email adres is reeds in gebruik door een lid",
            PWD_RECOVERY_EMAIL_SENT: "Er is een mail naar u verstuurt om het wachtwoord te veranderen.",
            ENGLISH: "Engels",
            ENOUGH_PEOPLE: "Er hebben zich genoeg mensen aangemeld.",
            ENROLL: "Aanmelden",
            ENROLL_PASS: "Vul hieronder je gewenste wachtwoord in",
            ERROR: "Foutmelding",
            FIRST_NAME: "Voornaam",
            FORGOT_PASS: "Wachtwoord vergeten",
            FORGOT_PASS_MESSAGE: "Wachtwoord vergeten? Als je hieronder je e-mail adres invult zullen we je een link sturen om je wachtwoord opnieuw in te stellen.",
            FORGOT_PASS_TITLE: "Wachtwoord vergeten?",
            HOME: "Home",
            INCORRECT_CREDENTIALS: "De gegevens zijn onjuist",
            LAST_NAME: "Achternaam",
            LAUNDRY: "Was",
            LOG_IN: "Log in",
            LOG_OUT: "Uitloggen",
            MEMBER_TYPE: "Gebruikerstype",
            MEMBERS_SUBTITLE: "Voeg leden van je club toe aan ClubNet, wijzig informatie van leden of verwijder ze.",
            MEMBERS_TITLE: "Leden",
            MENU_CHAT: "Berichten",
            MENU_CLUB_SETTINGS: "Clubinstellingen",
            MENU_FEED: "Feed",
            MENU_LOG_OUT: "Uitloggen",
            MENU_MEMBERS: "Leden",
            MENU_PROFILE: "Profiel",
            MENU_SETTINGS: "Instellingen",
            PEOPLE_PRESENT: "Mensen aanwezig:",
            MISSING_CLUB_NAME: "Geen clubnaam ingevuld",
            MISSING_CONFIRM_PASS: "Geen bevestiging van wachtwoord ingevuld",
            MISSING_CURRENT_PASS: "Huidige wachtwoord niet ingevuld",
            MISSING_FIRST_NAME: "Geen voornaam ingevuld",
            MISSING_LAST_NAME: "Geen achternaam ingevuld",
            MISSING_NEW_PASS: "Geen nieuw wachtwoord ingevuld",
            MISSING_PASSWORD: "Vul a.u.b een geldig wachtwoord in",
            MISSING_TARGET_VALUE: "Geel doel ingevuld",
            MISSING_VALID_EMAIL: "Geen geldig email adres ingevuld",
            MISSING_VALID_EMAIL_MESSAGE: "Vul a.u.b een geldig email adres in",
            MONTHLY: "Maandelijks",
            NEW_CHAT: "Nieuw gesprek",
            NEW_HERO: "Nieuwe held",
            NEW_PASS: "Nieuw wachtwoord",
            NEW_PRACTICALITY: "Nieuwe inventarisatie",
            NEW_SPONSORING: "Nieuw sponsorevenement",
            NEW_VOTING: "Nieuwe stem voor oefening",
            NO_ITEMS_MESSAGE: "Geen feed items gevonden",
            NONE: "Geen",
            NOT_AUTHORIZED: "Geen toegang, U bent niet geauthoriseerd",
            NOTIFICATION_FORM_TEXT: "React on new practicality.",
            NOTIFICATION_FORM_TITLE: "New practicality!",
            NOTIFICATION_HEROES_TEXT: "Check out a new hero of the week.",
            NOTIFICATION_HEROES_TITLE: "New Hero!",
            NOTIFICATION_SPONSORING_TEXT: "Contribute to a new sponsoring event",
            NOTIFICATION_SPONSORING_TITLE: "New sponsoring event!",
            NOTIFICATION_VOTING_TEXT: "Vote for the exercise you like.",
            NOTIFICATION_VOTING_TITLE: "New voting!",
            NUMBER_PRESENT: "Aantal aanwezigen",
            OPEN: "Openen",
            OTHER: "Anders",
            PASS: "Wachtwoord",
            PASS_INCORRECT: "Wachtwoord niet correct",
            PWD_NOT_MATCH: "Nieuwe wachtwoorden komen niet overeen",
            PWD_NOT_VALID: "Nieuwe wachtwoord niet sterk genoeg. Het wachtwoord moet minstens acht tekens bevatten waarvan tenminste één letter en één cijfer",
            PWD_RESET_SUCCESS: "Uw wachtwoord is succesvol veranderd, log a.u.b. opnieuw in.",
            PASSWORD_RECOVERY_SENT: "Mail verzonden naar",
            PROFILE: "Profiel",
            PROFILE_SUBTITLE: "Verander je gebruiksgegevens.",
            PROFILE_TITLE: "Profiel",
            PUBLISH: "Publiceer",
            REPEAT_INTERVAL: "Herhaalfrequentie",
            RESET_PASS: "Nieuw wachtwoord instellen",
            RESET_PASS_MESSAGE: "Vul hieronder je nieuwe wachtwoord in",
            SAVE: "Opslaan",
            SAVED: "Opgeslagen",
            SELECT: "Selecteer",
            SELECT_LANG: "Kies taal",
            SELECT_PICTURE: "Kies foto",
            SELECT_TRAINING: "Selecteer een training",
            SELECT_TYPE: "Selecteer een type",
            SELECTED_PICTURE: "De geselecteerde foto",
            SEND: "Verstuur",
            SETTINGS: "Instellingen",
            SHOW_FINAL_RESULTS_MESSAGE: "Laat de resultaten zien na afloop",
            SHOW_INT_RESULTS_MESSAGE: "Laat de tussentijdse resultaten zien",
            STICKY: "Plak bovenaan vast",
            STICKY_UNDO: "Losmaken",
            STILL_NEED: "Nog nodig:",
            SUCCESS: "Gelukt!",
            TARGET: "Doel (aantal)",
            TARGET_REACHED: "We hebben voldoende mensen.",
            TEAM: "Team",
            TITLE: "Titel",
            UPDATE_CLUB_SUCCESS: "Club aangepast",
            UPDATE_PROFILE_SUCCESS: "Gebruikersprofiel aangepast",
            USER_PROFILE: "Gebruikersprofiel",
            WEEKLY: "Wekelijks",
            WELCOME: "Welkom",
            FORM: "Inventarisatie",
            HEROES: "Helden",
            POLLS: "Oefening kiezen",
            SPONSORING: "Sponsorevenement",
            FILTER_ON: "Filteren op",
            CREATE_NEW: "Nieuw item",
            READ_MORE: "Lees meer",
            READ_LESS: "Lees minder",
            CONTRIBUTION: "Bijdrage:",

            'player': "speler",
            'pr': "pr",
            'general': "algemeen",
            'coach': "trainer",
            'laundry': "Was",
            'driving': "Vervoer",
            'absence': "Absentie",
            'other': "Anders",
            'Create': "Maak aan",
            'Save': "Opslaan"

        };
        translations.en = {
            MEMBERS_SUBTITLE: "Add, delete and manage the members of your club."
        };

        return translations;
    });