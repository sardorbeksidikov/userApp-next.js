import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
} from '@firebase/firestore';
import { db } from '@/lib/firebase';
import { User, Users } from '@/types/user';
import { setUsers } from '@/lib/redux/usersSlice';
import { AppStore } from '@/lib/redux/store';

export enum OrderByDirection {
  Asc = 'asc',
  Desc = 'desc',
}

const userCollection = collection(db, 'users');

export async function fetchUsers(
  field: string,
  direction: OrderByDirection,
  dispatch: AppStore['dispatch']
) {
  const q = query(userCollection, orderBy(field, direction));
  const unsub = onSnapshot(q, (querySnapshot) => {
    const docs = [] as Users;

    querySnapshot.forEach((doc) => {
      if (!doc.data().createdAt) return;

      docs.push({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toJSON(),
      } as User);
    });

    dispatch(setUsers(docs));
  });
}

export async function createUser(user: User) {
  const docRef = await setDoc(doc(userCollection), {
    ...user,
    createdAt: serverTimestamp(),
  });
  // TODO: Implement success notification with docRef.id (id of successfully created user
}

export async function updateUser(user: User) {
  await setDoc(doc(userCollection, user.id), {
    ...user,
    createdAt: new Timestamp(
      user.createdAt!.seconds,
      user.createdAt!.nanoseconds
    ),
  });
}
