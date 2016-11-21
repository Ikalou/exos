QUnit.test("#04 Arrays", function(assert) {
    /* my_addArray(a1, a2) */
    /*
    Ecrire une fonction my_addArray(a1, a2) qui retourne la concatenation
    de deux tableaux.
     */
    myABEqualU(assert, my_addArray, [], [], []);
    myABEqualU(assert, my_addArray, [1], [], [1]);
    myABEqualU(assert, my_addArray, [], [2], [2]);
    myABEqualU(assert, my_addArray, [1], [2], [1, 2]);
    myABEqualU(assert, my_addArray, [1, 2], [2], [1, 2, 2]);
    myABEqualU(assert, my_addArray, [1, 2], [3, 4, 5], [1, 2, 3, 4, 5]);
    myABEqualU(assert, my_addArray, [3, 4, 5], [1], [3, 4, 5, 1]);

    /* my_inArray(haystack, needle) */
    /*
    Ecrire une fonction my_inArray qui retourne true si needle est présent day haystack,
    false autrement.
     */
    myABEqual(assert, my_inArray, [], 1, false);
    myABEqual(assert, my_inArray, [1], 1, true);
    myABEqual(assert, my_inArray, [1], 0, false);
    myABEqual(assert, my_inArray, [0], 0, true);
    myABEqual(assert, my_inArray, [0], false, false);
    myABEqual(assert, my_inArray, [2, 4, 6 ,8], 2, true);
    myABEqual(assert, my_inArray, [1, 3, 5 ,7], 2, false);

    /* my_maxInArray(a) */
    /*
    Ecrire une fonction my_maxInArray qui retourne la valeur maximale contenu
    dans un tableau.
     */
    myAEqual(assert, my_maxInArray, [1], 1);
    myAEqual(assert, my_maxInArray, [1, 2, 3, 4, 5, 7, 3], 7);
    myAEqual(assert, my_maxInArray, [1, 2, 3, 4, 5, 7, 8], 8);
    myAEqual(assert, my_maxInArray, [9, 2, 3, 4, 5, 7, 8], 9);
    myAEqual(assert, my_maxInArray, [-1, 0, -2, -1], 0);
    myAEqual(assert, my_maxInArray, [-1, 0, -2, 1], 1);

    /* my_equivArray(a1, a2) */
    /*
    Ecrire une fonction my_equivArray qui renvoi true si deux tableaux sont équivalents
    (ils contiennent les même éléments, possiblement dans une ordre différent).
     */
    myABEqual(assert, my_equivArray, [1, 3], [3, 1], true);
    myABEqual(assert, my_equivArray, [1, 3], [4, 1], false);
    myABEqual(assert, my_equivArray, [1, 2, 3], [3, 2, 1], true);
    myABEqual(assert, my_equivArray, [1, 2, 3], [3, 2, 1, 1], false);
    myABEqual(assert, my_equivArray, [1, 1, 2, 3], [3, 2, 1, 1], true);
    myABEqual(assert, my_equivArray, [1, 1, 1, 2, 3], [3, 2, 1, 1], false);
    myABEqual(assert, my_equivArray, [24], [24], true);
    myABEqual(assert, my_equivArray, [24], [24, 42], false);
    myABEqual(assert, my_equivArray, [42, 24], [24], false);
    myABEqual(assert, my_equivArray, [24, 42], [24, 42], true);
});

QUnit.test("#05 Objects", function(assert) {
    /* my_hasPropABC(o) */
    /*
    Ecrire une fonction my_hasPropABC qui retourne true si un objet à une propriété
    ABC, false autrement.
     */
    myAEqual(assert, my_hasPropABC, {a: null, ABC: true}, true);
    myAEqual(assert, my_hasPropABC, {a: null, ABCD: true}, false);
    myAEqual(assert, my_hasPropABC, {}, false);
    myAEqual(assert, my_hasPropABC, {ABC: true}, true);
    myAEqual(assert, my_hasPropABC, {ABC: null, abz: 1, xcf: 5}, true);
});