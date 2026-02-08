import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { db } from './firebase.js'


// All our paths live here

export const userMetadataDBPath= ref(db, 'userMetadata');