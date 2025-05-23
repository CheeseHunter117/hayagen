import { type Plural, translation } from "./definition";

export default translation({
	language_name: "Deutsch",
	title: (link) => `${link("Hayagriva")} Generator`,
	clear_fields: "Textfelder leeren",
	copy_yaml: "YAML kopieren",
	label_label: {
		name: "Label",
		description: "der Name unter dem der Eintrag in Typst referenziert wird",
	},
	delete_tooltip: "Diesen Eintrag löschen",
	extra_tooltip: "Es sind zusätzlche Textfelder mit diesem Eintrag verbunden",
	format_tooltips: {
		date: "JJJJ-MM-TT, JJJJ-MM or JJJJ",
		timestamp: "MM:SS (vollständiges Format: TT:HH:MM:SS,msms)",
		range: "MM:SS-MM:SS (vollständiges Format: TT:HH:MM:SS,msms)",
	},
	entry: {
		type_label: "Art",
		types: {
			anthology: "Sammelband",
			anthos: "Anthos",
			article: "Artikel",
			artwork: "Kunstwerk",
			audio: "Audio",
			blog: "Blogeintrag",
			book: "Buch",
			case: "Gerichtsfall",
			chapter: "Kapitel",
			conference: "Konferenz",
			entry: "Eintrag",
			exhibition: "Ausstellung",
			legislation: "Gesetz",
			manuscript: "Manuskript",
			misc: "Verschiedenes",
			newspaper: "Zeitung",
			original: "Original",
			patent: "Patent",
			performance: "Aufführung",
			periodical: "Zeitschrift",
			post: "Beitrag",
			proceedings: "Tagungsband",
			reference: "Handbuch",
			report: "Bericht",
			repository: "Quelltext Repositorium",
			scene: "Szene",
			thesis: "Abschlussarbeit",
			thread: "Thread",
			video: "Video",
			web: "Internet",
		},
		title_label: "Titel",
		author_label: plural("Autor:in", "Autor:innen"),
		author_tooltips: {
			add: "Autor:in hinzufügen",
			remove: "Autor:in entfernen",
		},
		date_label: "Datum",
		abstract_label: "Zusammenfassung",
		genre_label: {
			name: "Genre",
			description:
				"Typ, Kategorie, oder Unterkategorie des Eintrags (z.B. „Dissertation“ für Doktorarbeiten; „WHO Publikation“ für technische Berichte der WHO). Benutzt dieses Feld nicht für oberflächliche Beschreibungen oder Kategorien (z.B. „Abendteuer“ für Abendteuer-Filme).",
		},
		editor_label: plural("Herausgeber:in", "Herausgeber:innen"),
		editor_tooltips: {
			add: "Herausgeber:in hinzufügen",
			remove: "Herausgeber:in entfernen",
		},
		affiliated_label: {
			name: plural("Assoziiert", "Assoziierte"),
			description:
				"persons involved with the item that do not fit author or editor",
				"Personen welche mit dem Eintrag assoziiert sind, aber nicht Autor:in oder Editor:in sind",
		},
		affiliated_tooltips: {
			add: "Assoziierten hinzufügen",
			remove: "Assoziierten entfernen",
		},
		publisher_label: "Verlag",
		publisher_location_label: "Veröffentlichungsort",
		location_label: {
			name: "Ort",
			description:
				"location at which an entry is physically located or took place. For the location where an item was published, see publisher.",
				"Ort an dem der Eintrag sich physisch befindet oder sich abgespielt hat. Für den Ort an dem ei Eintrag veröffenlicht wurde, siehe den Veröffentlichunsort.",
		},
		organization_label: {
			name: "Organisation",
			description: "Organisation bei/für welche der Eintrag produziert wurde.",
		},
		issue_label: {
			name: "Issue",
			description:
				"For an item whose parent has multiple issues, indicates the position in the issue sequence. Also used to indicate the episode number for TV.",
		},
		volume_label: {
			name: "Volume",
			description:
				"For an item whose parent has multiple volumes/parts/seasons… of which this item is one",
		},
		total_placeholder: "total",
		edition_label: "Edition",
		page_range_label: "Page range",
		time_range_label: "Time range",
		runtime_label: "Runtime",
		url_label: "URL",
		accessed_label: "Accessed",
		serial_number_label: "Serial number",
		language_label: "Language",
		archive_label: {
			name: "Archive",
			description: "name of the institution/collection where the item is kept",
		},
		archive_location_label: "Archive location",
		call_number_label: {
			name: "Call number",
			description:
				"The number of the item in a library, institution, or collection.",
		},
		note_label: "Note",
		parent_label: "Parent",
		add_parent: "Add parent",
	},
	person_with_role: {
		role_label: "Role",
		roles: {
			afterword: "Afterword",
			annotator: "Annotator",
			"cast-member": "Cast member",
			cinematography: "Cinematography",
			collaborator: "Collaborator",
			commentator: "Commentator",
			compiler: "Compiler",
			composer: "Composer",
			director: "Director",
			"executive-producer": "Executive producer",
			foreword: "Foreword",
			founder: "Founder",
			holder: "Holder",
			illustrator: "Illustrator",
			introduction: "Introduction",
			narrator: "Narrator",
			organizer: "Organizer",
			producer: "Producer",
			translator: "Translator",
			writer: "Writer",
		},
		names_label: "Names",
		names_tooltips: {
			add: "Add name",
			remove: "Remove name",
		},
	},
	person: {
		name_label: "Name",
		given_name_label: "Given name",
		prefix_label: "Prefix",
		suffix_label: "Suffix",
		alias_label: "Alias",
		collapsed_tooltip: "Collapsed name fields",
		expanded_tooltip: "Expanded name fields",
	},
});

function plural(singular: string, plural: string): Plural {
	return (n) => (n === 1 ? singular : plural);
}
