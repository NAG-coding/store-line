import { getDocument, getDocuments, setDocument } from '@/utils/helpers';
import { USERS } from '@/utils/const';
import { User } from '@/interfaces';

async function addUser(data: User) {
  return await setDocument(USERS, data.uid, data);
}

async function getUser(uid?: string) {
  if (!uid) return;

  return await getDocument(USERS, uid);
}

async function getUsers() {
  return await getDocuments(USERS);
}

export { getUser, getUsers, addUser };
