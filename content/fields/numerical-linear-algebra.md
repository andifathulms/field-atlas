---
id: numerical-linear-algebra
domain: math
thread: computation
name: Numerical Linear Algebra
parent_ids:
  - numerical-analysis
era_emerged: 1947 – 1969
core_question: How do you solve a million linear equations on a machine that rounds every operation, and know the answer is right?

summary: |-
  Almost every large computation in science ends in linear algebra. Simulating a bridge, fitting a model to data, ranking web pages and training a neural network all reduce, at their core, to solving systems of linear equations, finding eigenvalues, or both. Numerical linear algebra is the study of doing these tasks quickly and accurately with matrices far too large to handle by hand.

  Elimination for linear systems is two thousand years old. What was new after 1945 was the question of rounding. In 1947 and 1948 von Neumann, Goldstine and Turing analysed how errors grow when a computer inverts a matrix, and Turing gave the measure that governs it, the condition number. The next two decades produced the core algorithms still in use: conjugate gradients, the QR algorithm for eigenvalues and a stable way to compute the singular value decomposition. In 1969 Strassen showed that even multiplying matrices can be done faster than anyone expected, and how much faster is still unknown.

key_ideas:
  - term: Gaussian elimination
    definition: >-
      Solve a system of equations by subtracting multiples of one equation from the others
      until each has one fewer unknown, then solve backwards. For $n$ equations it takes
      about $2n^3/3$ arithmetic operations.
    turning_point_id: fangcheng-elimination
  - term: Condition number
    definition: >-
      A measure of how sensitive the answer is to small changes in the data. If it is about
      $10^k$, a computation carried out to 16 digits can be expected to lose about $k$ of
      them, however carefully it is done.
    turning_point_id: turing-condition-number
  - term: Iterative methods
    definition: >-
      For very large sparse matrices, where most entries are zero, do not eliminate at all.
      Improve an approximate solution step by step, using only multiplications by the
      matrix. Conjugate gradients is the best known.
    turning_point_id: conjugate-gradients
  - term: Eigenvalues by iteration
    definition: >-
      The eigenvalues of a large matrix cannot be computed by formula. The QR algorithm
      repeatedly factors the matrix and multiplies the factors in reverse order, and the
      matrix converges to a form with the eigenvalues on its diagonal.
    turning_point_id: qr-algorithm

turning_points:
  - id: fangcheng-elimination
    date: c. 1st century CE
    type: REFORMULATION
    title: Elimination in the Nine Chapters
    description: >-
      The eighth chapter of the Chinese *Nine Chapters on the Mathematical Art*, called
      *fangcheng*, solves systems of up to five linear equations by arranging their
      coefficients in columns on a counting board and subtracting columns from each other.
      It is the method now called Gaussian elimination, set out in full about 1,700 years
      before Gauss. Liu Hui wrote a commentary on it in 263 CE.
    contested: false
    sources:
      - citation: "Shen, K., Crossley, J. N. & Lun, A. W.-C. (1999). The Nine Chapters on the Mathematical Art: Companion and Commentary. Oxford University Press."
        url: null
      - citation: "Grcar, J. F. (2011). Mathematicians of Gaussian elimination. Notices of the American Mathematical Society 58(6): 782–792."
        url: null

  - id: von-neumann-goldstine-inversion
    date: "1947"
    type: PROOF
    title: Rounding error in matrix inversion
    description: >-
      Harold Hotelling had argued in 1943 that errors in elimination could grow like $4^n$,
      which would make large systems hopeless on a computer. John von Neumann and Herman
      Goldstine, planning for the first stored-program computers, analyse elimination in
      detail and prove that for an important class of matrices the errors stay under
      control. Their 80-page paper is often called the first paper of modern numerical
      analysis.
    contested: false
    sources:
      - citation: "von Neumann, J. & Goldstine, H. H. (1947). Numerical inverting of matrices of high order. Bulletin of the American Mathematical Society 53(11): 1021–1099."
        url: null

  - id: turing-condition-number
    date: "1948"
    type: REFORMULATION
    title: Turing's condition number
    description: >-
      Alan Turing, then at the National Physical Laboratory, separates two causes of error:
      the method, and the problem itself. Some systems are ill-conditioned, so sensitive
      that tiny changes in the data change the answer a lot, and no method can fix that. He
      names and defines the condition number to measure it, and writes elimination as the
      factoring of a matrix into triangular pieces, the LU decomposition.
    contested: false
    sources:
      - citation: "Turing, A. M. (1948). Rounding-off errors in matrix processes. Quarterly Journal of Mechanics and Applied Mathematics 1(1): 287–308."
        url: null

  - id: conjugate-gradients
    date: "1952"
    type: REFORMULATION
    title: The conjugate gradient method
    description: >-
      Magnus Hestenes and Eduard Stiefel, working independently and then together at the
      Institute for Numerical Analysis in Los Angeles, publish a method that solves a
      symmetric positive definite system by a sequence of cleverly chosen search
      directions. In exact arithmetic it finishes in $n$ steps. Rounding spoils that, and
      the method was neglected until about 1971, when it was recognised as an excellent
      iterative method for huge sparse systems.
    contested: false
    sources:
      - citation: "Hestenes, M. R. & Stiefel, E. (1952). Methods of conjugate gradients for solving linear systems. Journal of Research of the National Bureau of Standards 49(6): 409–436."
        url: null

  - id: qr-algorithm
    date: 1959 – 1961
    type: REFORMULATION
    title: The QR algorithm
    description: >-
      John Francis in England and Vera Kublanovskaya in Leningrad independently discover
      that factoring a matrix as $QR$, an orthogonal matrix times a triangular one, and
      multiplying back as $RQ$, repeated with suitable shifts, drives the matrix towards a
      form that reveals its eigenvalues. Stable and fast, it is still the standard method
      for eigenvalues of matrices that fit in memory.
    contested: true
    contested_note: >-
      Francis and Kublanovskaya reached the algorithm independently at about the same time.
      Francis's papers included the practical shifts that make it fast, and Western
      textbooks long credited him alone. Later historical work has argued that
      Kublanovskaya's contribution deserves equal recognition. Neither disputed the other's
      priority.
    sources:
      - citation: "Francis, J. G. F. (1961). The QR transformation: a unitary analogue to the LR transformation. Part 1. The Computer Journal 4(3): 265–271."
        url: null
      - citation: "Kublanovskaya, V. N. (1962). On some algorithms for the solution of the complete eigenvalue problem. USSR Computational Mathematics and Mathematical Physics 1(3): 637–657."
        url: null
      - citation: "Golub, G. & Uhlig, F. (2009). The QR algorithm: 50 years later, its genesis by John Francis and Vera Kublanovskaya and subsequent developments. IMA Journal of Numerical Analysis 29(3): 467–485."
        url: null

  - id: strassen-multiplication
    date: "1969"
    type: DISPROOF
    title: Elimination is not optimal
    description: >-
      Multiplying two $n \times n$ matrices in the usual way takes $n^3$ multiplications,
      and nobody had seriously doubted that this was necessary. Volker Strassen shows that
      two $2 \times 2$ matrices can be multiplied with 7 multiplications instead of 8.
      Applied recursively to blocks, this multiplies matrices, and therefore solves linear
      systems, in about $n^{2.81}$ operations.
    contested: false
    sources:
      - citation: "Strassen, V. (1969). Gaussian elimination is not optimal. Numerische Mathematik 13(4): 354–356."
        url: null

open_problems:
  - id: matrix-multiplication-exponent
    name: The exponent of matrix multiplication
    status: open
    status_note: Open as of writing; the best upper bounds published by 2024 were just below 2.372.
    description: >-
      Let $\omega$ be the smallest number such that two $n \times n$ matrices can be
      multiplied in about $n^{\omega}$ operations. Obviously $\omega \ge 2$, since the
      answer has $n^2$ entries. Strassen showed $\omega < 2.81$, and a long series of
      improvements has pushed the bound below 2.372. Many believe that $\omega = 2$.
    why_hard: >-
      The best methods rest on an indirect construction, the laser method, whose limits are
      now partly understood: several results show that it and its close relatives cannot
      reach 2. The gains of the last thirty years have come in the third decimal place.
      Proving a lower bound better than 2 seems far out of reach.
    unlocks: >-
      The same exponent governs solving linear systems, inverting matrices and computing
      determinants, so an answer would settle the true cost of linear algebra. It would
      also speed up many graph algorithms that reduce to matrix products, although the
      fastest known methods are too complicated to use in practice.
    sources:
      - citation: "Strassen, V. (1969). Gaussian elimination is not optimal. Numerische Mathematik 13(4): 354–356."
        url: null
      - citation: "Alman, J. & Vassilevska Williams, V. (2021). A refined laser method and faster matrix multiplication. Proceedings of the 2021 ACM-SIAM Symposium on Discrete Algorithms: 522–539."
        url: null

applications:
  - area: The web
    title: Ranking pages by an eigenvector
    description: >-
      Google's original PageRank treated the web as a huge matrix of links and ranked each
      page by its entry in the matrix's leading eigenvector. With billions of pages, the
      eigenvector was found by repeated multiplication, the simplest iterative method.
    sources:
      - citation: "Brin, S. & Page, L. (1998). The anatomy of a large-scale hypertextual Web search engine. Computer Networks and ISDN Systems 30(1–7): 107–117."
        url: null
  - area: Quantum physics
    title: Energy levels as eigenvalues
    description: >-
      In quantum mechanics the allowed energies of a molecule or a material are the
      eigenvalues of a matrix, often an enormous one. Computing them, with the QR algorithm
      for moderate sizes and iterative methods for huge ones, is a large share of the
      world's scientific computing.
    domain: physics
    field_id: quantum-mechanics
    sources:
      - citation: "Saad, Y. (2011). Numerical Methods for Large Eigenvalue Problems, revised edition. SIAM."
        url: null

further_reading:
  - citation: "Trefethen, L. N. & Bau, D. (1997). Numerical Linear Algebra. SIAM."
    url: null
    note: A clear, short textbook built around the ideas of conditioning and stability.
  - citation: "Golub, G. H. & Van Loan, C. F. (2013). Matrix Computations, 4th edition. Johns Hopkins University Press."
    url: null
    note: The standard reference for the algorithms themselves.
  - citation: "Grcar, J. F. (2011). Mathematicians of Gaussian elimination. Notices of the American Mathematical Society 58(6): 782–792."
    url: null
    note: A short history from the Nine Chapters to the computer age.
---

## Elimination

Systems of linear equations are among the oldest problems in mathematics. The Chinese *Nine Chapters on the Mathematical Art*, compiled by about the first century CE, solves them by writing the coefficients in columns on a counting board and subtracting one column from another until the unknowns can be read off one at a time. The method is exactly what is now taught as Gaussian elimination.

The European name comes from least squares. In 1805 {{fig:legendre|Adrien-Marie Legendre}} published a rule for fitting an orbit to more observations than it has unknowns: minimise the sum of the squared errors. In 1809 {{fig:gauss|Carl Friedrich Gauss}} gave the rule a basis in probability and a systematic way to solve the resulting equations. He also claimed to have used it since 1795, which Legendre resented, a dispute followed in [statistical inference](/math/statistical-inference/). Through the nineteenth century, surveyors and geodesists solved such systems by hand, sometimes with dozens of unknowns.

## Will the Errors Grow?

The first electronic computers made much larger systems possible, and raised a worry. In 1943 the statistician Harold Hotelling estimated that rounding errors in elimination could grow like $4^n$ with the number of unknowns, which would ruin any system of more than a few dozen. In 1947 {{fig:von-neumann|John von Neumann}} and {{fig:herman-goldstine|Herman Goldstine}} analysed the process line by line and showed that for symmetric positive definite matrices, a class common in physics and statistics, the errors stay small.

A year later {{fig:turing|Alan Turing}} separated the two sources of trouble. A method can be unstable, adding more error than it should. Or the problem itself can be ill-conditioned, so sensitive to its data that no method could do well. He called the measure of that sensitivity the condition number. The distinction became the organising idea of the whole subject: first ask how sensitive the problem is, then ask whether the method adds more error than that. Wilkinson later showed that elimination, with rows swapped to use the largest available pivot, is almost always stable in this sense.

## Algorithms for Large Matrices

The 1950s and 1960s produced most of the algorithms still in daily use. In 1952 {{fig:magnus-hestenes|Magnus Hestenes}} and {{fig:eduard-stiefel|Eduard Stiefel}} published the conjugate gradient method, which never changes the matrix at all and only multiplies vectors by it. That made it ideal, once its value was recognised, for the huge sparse systems that come from [partial differential equations](/math/numerical-pdes/). For eigenvalues, {{fig:john-francis|John Francis}} and {{fig:vera-kublanovskaya|Vera Kublanovskaya}} independently found the QR algorithm around 1961. In 1965 Gene Golub and William Kahan showed how to compute the singular value decomposition stably, which made least squares and data compression reliable.

In 1969 {{fig:volker-strassen|Volker Strassen}}, trying to prove that elimination was the best possible method, found instead that it was not. His paper, three pages long, was titled "Gaussian elimination is not optimal". The algorithms were then collected into shared libraries: EISPACK and LINPACK in the 1970s, and LAPACK from 1992, which still sits beneath most scientific software.

## A Closer Look: Counting and Conditioning

Elimination on $n$ equations first uses the first equation to remove the first unknown from the other $n - 1$. That costs about $2(n-1)^2$ operations. The next stage works on a system one size smaller, and so on. Adding up,

$$
\sum_{k=1}^{n-1} 2k^2 \approx \frac{2n^3}{3}.
$$

For 1,000 unknowns that is about $6.7 \times 10^8$ operations, well under a second on a laptop. For 10,000 unknowns it is $6.7 \times 10^{11}$, a thousand times more. Cost grows with the cube of the size.

Speed is not the only question. The Hilbert matrix has entries $1/(i + j - 1)$. For three unknowns,

$$
H_3 = \begin{pmatrix} 1 & \tfrac12 & \tfrac13 \\ \tfrac12 & \tfrac13 & \tfrac14 \\ \tfrac13 & \tfrac14 & \tfrac15 \end{pmatrix},
\qquad
H_3^{-1} = \begin{pmatrix} 9 & -36 & 30 \\ -36 & 192 & -180 \\ 30 & -180 & 180 \end{pmatrix}.
$$

The entries of $H_3$ are at most 1, but its inverse has entries up to 192. Small changes in the data are magnified accordingly. The condition number, the ratio of the largest to the smallest stretching the matrix applies, measures this. Choose the right-hand side so that the exact solution is all ones, solve in standard double precision, which keeps about 16 digits, and look at the largest error in the computed answer:

| Size $n$ | Condition number | Largest error |
|---|---|---|
| 4 | $1.6 \times 10^{4}$ | $\approx 10^{-13}$ |
| 6 | $1.5 \times 10^{7}$ | $\approx 10^{-10}$ |
| 8 | $1.5 \times 10^{10}$ | $\approx 10^{-7}$ |
| 10 | $1.6 \times 10^{13}$ | $\approx 10^{-4}$ |
| 12 | $1.7 \times 10^{16}$ | $\approx 0.3$ |

This is Turing's rule of thumb in action. A condition number of about $10^k$ costs about $k$ of the 16 digits. At size 12 almost nothing is left, and some entries of the answer are off by about a third. The elimination was carried out stably each time. The problem, not the method, lost the digits.

## Linear Algebra Everywhere

Linear algebra became the engine room of computing. The finite element models of [numerical PDEs](/math/numerical-pdes/) end in sparse systems with millions of unknowns, solved by conjugate gradients and its relatives. The steps of [continuous optimisation](/math/continuous-optimization/) solve a linear system at every iteration. The fastest supercomputers are ranked by how quickly they perform elimination. Behind it all sits a question Strassen opened in 1969 and nobody has closed: how many operations does it really take to multiply two matrices?
