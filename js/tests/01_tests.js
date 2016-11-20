QUnit.test("#01 Numbers", function(assert) {
    /* my_add(a, b) */
    /*
    Ecrire une fonction my_add qui retourne l'addition de deux nombres.
     */
    myABEqual(assert, my_add, 0, 0, 0);
    myABEqual(assert, my_add, 1, 0, 1);
    myABEqual(assert, my_add, 0, 1, 1);
    myABEqual(assert, my_add, 1, 1, 2);
    myABEqual(assert, my_add, 42, 43, 85);
    myABEqual(assert, my_add, 99, 1, 100);
    myABEqual(assert, my_add, -1, 1, 0);
    myABEqual(assert, my_add, -33, 6, -27);
    myABEqual(assert, my_add, -33, -6, -39);

    /* my_sub(a, b) */
    /*
     Ecrire une fonction my_sub qui retourne la soustraction de deux nombres.
     */
    myABEqual(assert, my_sub, 0, 0, 0);
    myABEqual(assert, my_sub, 1, 0, 1);
    myABEqual(assert, my_sub, 0, 1, -1);
    myABEqual(assert, my_sub, 1, 1, 0);
    myABEqual(assert, my_sub, 42, 43, -1);
    myABEqual(assert, my_sub, 99, 1, 98);
    myABEqual(assert, my_sub, -1, 1, -2);
    myABEqual(assert, my_sub, -33, 6, -39);
    myABEqual(assert, my_sub, -33, -6, -27);

    /* my_mult(a, b) */
    /*
     Ecrire une fonction my_mult qui retourne la multiplication de deux nombres.
     */
    myABEqual(assert, my_mult, 0, 0, 0);
    myABEqual(assert, my_mult, 1, 0, 0);
    myABEqual(assert, my_mult, 0, 1, 0);
    myABEqual(assert, my_mult, 1, 2, 2);
    myABEqual(assert, my_mult, 12, 3, 36);
    myABEqual(assert, my_mult, 12, -3, -36);
    myABEqual(assert, my_mult, -12, -3, 36);

    /* my_div(a, b) */
    /*
     Ecrire une fonction my_div qui retourne la division de deux nombres.
     */
    myABEqual(assert, my_div, 0, 1, 0);
    myABEqual(assert, my_div, 1, 2, 0.5);
    myABEqual(assert, my_div, 12, 3, 4);
    myABEqual(assert, my_div, 12, -3, -4);
    myABEqual(assert, my_div, -12, -3, 4);

    /* my_isPositive(a) */
    /*
     Ecrire une fonction my_isPositive qui return true si un nombre
     est positif, false autrement.
     */
    myAEqual(assert, my_isPositive, 0, true);
    myAEqual(assert, my_isPositive, 10, true);
    myAEqual(assert, my_isPositive, -10, false);

    /* my_min(a, b, c) */
    /*
     Ecrire une fonction my_min qui renvoi le minimum de trois nombres.
     */
    myABCEqual(assert, my_min, 0, 0, 0, 0);
    myABCEqual(assert, my_min, 0, 1, 2, 0);
    myABCEqual(assert, my_min, 0, -1, 2, -1);
    myABCEqual(assert, my_min, 0, -1, -2, -2);
    myABCEqual(assert, my_min, -2, -1, 0, -2);
    myABCEqual(assert, my_min, 999, 99, 9, 9);
    myABCEqual(assert, my_min, 9, 999, 99, 9);
    myABCEqual(assert, my_min, 99, 9, 999, 9);
    myABCEqual(assert, my_min, Number.MAX_VALUE, 0, -Number.MAX_VALUE, -Number.MAX_VALUE);

    /* my_max(a, b, c) */
    /*
     Ecrire une fonction my_max qui renvoi le maximum de trois nombres.
     */
    myABCEqual(assert, my_max, 0, 0, 0, 0);
    myABCEqual(assert, my_max, 0, 1, 2, 2);
    myABCEqual(assert, my_max, 0, -1, 2, 2);
    myABCEqual(assert, my_max, 0, -1, -2, 0);
    myABCEqual(assert, my_max, -2, -1, 0, 0);
    myABCEqual(assert, my_max, 999, 99, 9, 999);
    myABCEqual(assert, my_max, 9, 999, 99, 999);
    myABCEqual(assert, my_max, 99, 9, 999, 999);
    myABCEqual(assert, my_max, -Number.MAX_VALUE, 0, Number.MAX_VALUE, Number.MAX_VALUE);

    /* my_isEven(a) */
    /*
    Ecrire une fonction my_isEven qui retourne true si un nombre est pair,
    false autrement.
     */
    myAEqual(assert, my_isEven, 0, true);
    myAEqual(assert, my_isEven, 1, false);
    myAEqual(assert, my_isEven, 2, true);
    myAEqual(assert, my_isEven, -1, false);
    myAEqual(assert, my_isEven, -2, true);
    myAEqual(assert, my_isEven, 22, true);
    myAEqual(assert, my_isEven, 23, false);

    /* my_isMultN(n, m) */
    /*
    Ecrire une fonction my_isMultN qui renvoi true si n est un multiple de
    m, false autrement.
     */
    myABEqual(assert, my_isMultN, 1, 1, true);
    myABEqual(assert, my_isMultN, 2, 1, true);
    myABEqual(assert, my_isMultN, 2, 2, true);
    myABEqual(assert, my_isMultN, 2, 3, false);
    myABEqual(assert, my_isMultN, 25, 3, false);
    myABEqual(assert, my_isMultN, 27, 3, true);
    myABEqual(assert, my_isMultN, 66, 11, true);
    myABEqual(assert, my_isMultN, 66, 12, false);
    myABEqual(assert, my_isMultN, 66, 13, false);
    myABEqual(assert, my_isMultN, 66, 6, true);
    myABEqual(assert, my_isMultN, 66, 6, true);

    /* my_square(a) */
    /*
    Ecrire une fonction qui renvoi le carré d'un nombre.
     */
    myAEqual(assert, my_square, 0, 0);
    myAEqual(assert, my_square, 1, 1);
    myAEqual(assert, my_square, 2, 4);
    myAEqual(assert, my_square, 3, 9);
    myAEqual(assert, my_square, 4, 16);
    myAEqual(assert, my_square, -3, 9);
    myAEqual(assert, my_square, -4, 16);
});

QUnit.test("#02 Booleans", function(assert) {
    /* my_isTruthy(a) */
    /*
    Ecrire une fonction my_isTruthy qui renvoi true si a est
    truthy, false autrement.
     */
    myAEqual(assert, my_isTruthy, true, true);
    myAEqual(assert, my_isTruthy, {}, true);
    myAEqual(assert, my_isTruthy, [], true);
    myAEqual(assert, my_isTruthy, ":)", true);
    myAEqual(assert, my_isTruthy, "0", true);
    myAEqual(assert, my_isTruthy, "null", true);
    myAEqual(assert, my_isTruthy, 42, true);
    myAEqual(assert, my_isTruthy, 3.14, true);
    myAEqual(assert, my_isTruthy, false, false);
    myAEqual(assert, my_isTruthy, null, false);
    myAEqual(assert, my_isTruthy, NaN, false);
    myAEqual(assert, my_isTruthy, 0, false);
    myAEqual(assert, my_isTruthy, "", false);

    /* my_isFalsy(a) */
    /*
     Ecrire une fonction my_isFalsy qui renvoi true si a est
     falsy, false autrement.
     */
    myAEqual(assert, my_isFalsy, true, false);
    myAEqual(assert, my_isFalsy, {}, false);
    myAEqual(assert, my_isFalsy, [], false);
    myAEqual(assert, my_isFalsy, ":)", false);
    myAEqual(assert, my_isFalsy, "0", false);
    myAEqual(assert, my_isFalsy, "null", false);
    myAEqual(assert, my_isFalsy, 42, false);
    myAEqual(assert, my_isFalsy, 3.14, false);
    myAEqual(assert, my_isFalsy, false, true);
    myAEqual(assert, my_isFalsy, null, true);
    myAEqual(assert, my_isFalsy, NaN, true);
    myAEqual(assert, my_isFalsy, 0, true);
    myAEqual(assert, my_isFalsy, "", true);

    /* my_isTrue(a) */
    /*
     Ecrire une fonction my_isTrue qui renvoi true si a est
     true, false autrement.
     */
    myAEqual(assert, my_isTrue, true, true);
    myAEqual(assert, my_isTrue, {}, false);
    myAEqual(assert, my_isTrue, [], false);
    myAEqual(assert, my_isTrue, ":)", false);
    myAEqual(assert, my_isTrue, "0", false);
    myAEqual(assert, my_isTrue, "null", false);
    myAEqual(assert, my_isTrue, 42, false);
    myAEqual(assert, my_isTrue, 3.14, false);
    myAEqual(assert, my_isTrue, false, false);
    myAEqual(assert, my_isTrue, null, false);
    myAEqual(assert, my_isTrue, NaN, false);
    myAEqual(assert, my_isTrue, 0, false);
    myAEqual(assert, my_isTrue, "", false);

    /* my_isFalse(a) */
    /*
     Ecrire une fonction my_isFalse qui renvoi true si a est
     false, false autrement.
     */
    myAEqual(assert, my_isFalse, true, false);
    myAEqual(assert, my_isFalse, {}, false);
    myAEqual(assert, my_isFalse, [], false);
    myAEqual(assert, my_isFalse, ":)", false);
    myAEqual(assert, my_isFalse, "0", false);
    myAEqual(assert, my_isFalse, "null", false);
    myAEqual(assert, my_isFalse, 42, false);
    myAEqual(assert, my_isFalse, 3.14, false);
    myAEqual(assert, my_isFalse, false, true);
    myAEqual(assert, my_isFalse, null, false);
    myAEqual(assert, my_isFalse, NaN, false);
    myAEqual(assert, my_isFalse, 0, false);
    myAEqual(assert, my_isFalse, "", false);
});

QUnit.test("#03 Strings", function(assert) {
    /* my_addStr(s1, s2) */
    /*
    Ecrire une fonction my_addStr qui retourne la concaténation
    de deux châines de caractéres.
     */
    myABEqual(assert, my_addStr, "", "", "");
    myABEqual(assert, my_addStr, "a", "", "a");
    myABEqual(assert, my_addStr, "", "b", "b");
    myABEqual(assert, my_addStr, "a", "b", "ab");
    myABEqual(assert, my_addStr, "I am", " ready", "I am ready");

    /* repeatNTimes(s, n) */
    /*
    Ecrire une fonction repeatNTimes qui retourne la châine de caractéres s repetée
    n fois.
     */
    myABEqual(assert, my_repeatStr, "", 5, "");
    myABEqual(assert, my_repeatStr, "a", 3, "aaa");
    myABEqual(assert, my_repeatStr, "a", 1, "a");
    myABEqual(assert, my_repeatStr, "ab", 2, "abab");

    /* my_revStr(s) */
    /*
    Ecrire une fonction my_revStr qui retourne une châine de catactéres à
    l'envers.
     */
    myAEqual(assert, my_revStr, "", "");
    myAEqual(assert, my_revStr, "a", "a");
    myAEqual(assert, my_revStr, "ab", "ba");
    myAEqual(assert, my_revStr, "abc", "cba");
    myAEqual(assert, my_revStr, "abcde", "edcba");
    myAEqual(assert, my_revStr, "--->  <---", "---<  >---");

    /* my_indexOf(haystack, needle) */
    /*
    Ecrire une fonction my_indexOf qui retourne true si le caractére
    needle est présent dans la châine de caractéres haystack, false autrement.
     */
    myABEqual(assert, my_indexOf, "", "", false);
    myABEqual(assert, my_indexOf, "a", "a", 0);
    myABEqual(assert, my_indexOf, "a", "b", false);
    myABEqual(assert, my_indexOf, "ab", "a", 0);
    myABEqual(assert, my_indexOf, "ab", "b", 1);
    myABEqual(assert, my_indexOf, "ab", "c", false);
    myABEqual(assert, my_indexOf, "Il etait une fois...", ".", 17);
    myABEqual(assert, my_indexOf, "Il etait une fois...", "!", false);

    /* my_left(s, n) */
    /*
    Ecrire une fonction my_left qui retourne les n premiers caractéres de s.
     */
    myABEqual(assert, my_left, "", 0, "");
    myABEqual(assert, my_left, "123456789", 2, "12");
    myABEqual(assert, my_left, "123456789", 4, "1234");
    myABEqual(assert, my_left, "123456789", 9, "123456789");
    myABEqual(assert, my_left, "123456789", 50, "123456789");

    /* my_right(s, n) */
    /*
     Ecrire une fonction my_right qui retourne les n premiers caractéres de s.
     */
    myABEqual(assert, my_right, "", 0, "");
    myABEqual(assert, my_right, "123456789", 2, "89");
    myABEqual(assert, my_right, "123456789", 4, "6789");
    myABEqual(assert, my_right, "123456789", 9, "123456789");
    myABEqual(assert, my_right, "123456789", 50, "123456789");

    /* my_strToLower(s) */
    /*
    Ecrire une fonction my_strToLower qui retourne une châine de caractéres
    tout en miniscules. Vous ne devez vous soucier que des 26 lettres a-z.
     */
    myAEqual(assert, my_strToLower, "", "");
    myAEqual(assert, my_strToLower, "a", "a");
    myAEqual(assert, my_strToLower, "A", "a");
    myAEqual(assert, my_strToLower, "Aa", "aa");
    myAEqual(assert, my_strToLower, "aBc", "abc");
    myAEqual(assert, my_strToLower, "a  d Bc  zZ", "a  d bc  zz");
    myAEqual(assert, my_strToLower, "IL ETAIT UnE FOIS...", "il etait une fois...");
});
