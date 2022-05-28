import 'package:firebase_auth/firebase_auth.dart';
import 'package:rxdart/rxdart.dart';

class CauponaFirebaseUser {
  CauponaFirebaseUser(this.user);
  User user;
  bool get loggedIn => user != null;
}

CauponaFirebaseUser currentUser;
bool get loggedIn => currentUser?.loggedIn ?? false;
Stream<CauponaFirebaseUser> cauponaFirebaseUserStream() => FirebaseAuth.instance
    .authStateChanges()
    .debounce((user) => user == null && !loggedIn
        ? TimerStream(true, const Duration(seconds: 1))
        : Stream.value(user))
    .map<CauponaFirebaseUser>(
        (user) => currentUser = CauponaFirebaseUser(user));
