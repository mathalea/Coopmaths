import Exercice from '../ClasseExercice.js'
import { liste_de_question_to_contenu, randint, calcul, creerNomDePolygone, tex_nombre } from '../../modules/outils.js'
import { point, pointSurSegment, pointIntersectionDD, labelPoint, droite, segment, segmentAvecExtremites, rotation, afficheLongueurSegment, afficheMesureAngle, longueur, mathalea2d } from '../../modules/2d.js'
import Alea2iep from '../../modules/Alea2iep.js'

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 * Référence 6G23-2
 */
export default function Tracer_triangle_2_angles () {
  Exercice.call(this) // Héritage de la classe Exercice()
  this.titre = 'Tracer un triangle dont on connait une longueur et 2 angles'
  this.consigne = ''
  this.nb_questions = 3
  this.nb_cols = 1
  this.nb_cols_corr = 1
  this.type_exercice = 'IEP'
  this.sup = false

  this.nouvelle_version = function () {
    this.liste_questions = [] // Liste de questions
    this.liste_corrections = [] // Liste de questions corrigées

    for (
      let i = 0, texte, texteCorr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      const c = calcul(randint(30, 70) / 10)
      const angle1 = randint(20, 70)
      const angle2 = randint(20, 70)
      const p = creerNomDePolygone(3)
      texte = `Tracer un triangle $${p}$ tel que $${p[0] + p[1]}=${tex_nombre(
        c
      )}$ cm, $\\widehat{${p[1] + p[0] + p[2]
        }}=${angle1}\\degree$ et $\\widehat{${p[0] + p[1] + p[2]
        }}=${angle2}\\degree$.`
      texte += `<br> Mesurer $${p[0] + p[2]}$ et $${p[1] + p[2]}$.`
      const A0 = point(0, 0, p[0], 'left')
      const B0 = point(c, 0, p[1], 'right')
      const s0 = segmentAvecExtremites(A0, B0)
      const t1 = afficheLongueurSegment(B0, A0)

      const A1 = point(B0.x + 4, 0, p[0], 'left')
      const B1 = point(A1.x + c, 0, p[1], 'right')
      const s1 = segment(A1, B1)
      s1.styleExtremites = '-|'
      const c1 = rotation(B1, A1, angle1)
      const C1 = pointSurSegment(c1, A1, -3)
      const s2 = segment(A1, C1)
      const t2 = afficheMesureAngle(B1, A1, C1)

      const A2 = point(B1.x + 4, 0, p[0], 'left')
      const B2 = point(A2.x + c, 0, p[1], 'right')
      const s3 = segment(A2, B2)
      const c2 = rotation(B2, A2, angle1)
      const C2 = pointSurSegment(c2, A2, -3)
      const s4 = segment(A2, C2)
      const c3 = rotation(A2, B2, -angle2)
      const C3 = pointSurSegment(c3, B2, -3)
      const t3 = afficheMesureAngle(A2, B2, C3)
      const s5 = segment(B2, C3)
      const d1 = droite(A2, C2)
      d1.isVisible = false
      const d2 = droite(B2, C3)
      d2.isVisible = false
      const C = pointIntersectionDD(d1, d2, p[2])
      const l = labelPoint(A0, B0, A1, B1, A2, B2, C)

      // if (sortie_html) {
      //   texteCorr = mathalea2d(
      //     { xmin: -1, xmax: 3 * c + 10, ymin: -1, ymax: 10 }, s0, s1, s2, s3, s4, s5, t1, t2, t3, l)
      //   texteCorr += '<br><br>'
      // } else {
      //   texteCorr = ''
      // }
      if (this.sup) {
        texteCorr = ''
      } else {
        texteCorr = `$${p[0] + p[2]}\\approx${tex_nombre(longueur(A2, C, 1))}$ cm et $${p[1] + p[2]}\\approx${tex_nombre(longueur(B2, C, 1))}$ cm.`
      }
      const anim = new Alea2iep()
      anim.triangle1longueur2angles(p, c, angle1, angle2, true, true) // description et longueur
      texteCorr += anim.htmlBouton()

      if (this.liste_questions.indexOf(texte) === -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte)
        this.liste_corrections.push(texteCorr)
        i++
      }
      cpt++
    }
    liste_de_question_to_contenu(this)
  }
  this.besoin_formulaire_case_a_cocher = ["Longueurs données qu'à la fin de l'animation"]
}
