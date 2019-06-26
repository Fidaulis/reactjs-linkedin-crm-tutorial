import firebase  from 'firebase/app'
import 'firebase/firestore';

const config = {
    projectId: "crm-linkedin-1e7f2",
};


firebase.initializeApp(config);


export default firebase;