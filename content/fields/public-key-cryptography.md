---
id: public-key-cryptography
domain: math
thread: number-theory
name: Public-Key Cryptography
parent_ids:
  - elementary-number-theory
  - arithmetic-geometry
  - computational-complexity
era_emerged: 1976 – 1985
core_question: How can two strangers communicate in secret without ever having shared a secret key?

summary: |-
  For most of history, secret messages required a secret key shared in advance. Public-key cryptography removed that requirement. Everyone publishes a key that anyone can use to lock a message, and only the holder of a matching private key can unlock it. The same idea yields digital signatures, which prove who sent a message.

  It rests on number theory. Some operations, like multiplying two large primes, are easy, while reversing them, factoring the product, seems practically impossible. Centuries-old theorems of Fermat and Euler, and the elliptic curves of arithmetic geometry, now secure nearly every connection on the internet. A quantum computer would break them, which is why the field is being rebuilt now.

key_ideas:
  - term: Public and private keys
    definition: >-
      A key pair: the public key locks (or verifies), the private key unlocks (or signs).
      Publishing the public key does not reveal the private one.
    turning_point_id: diffie-hellman
  - term: Trapdoor one-way function
    definition: >-
      Easy to compute, infeasible to invert, unless you know a secret "trapdoor". RSA
      uses multiplication of primes, where the trapdoor is knowing the factors.
    turning_point_id: rsa
  - term: RSA
    definition: >-
      Choose primes $p, q$ and publish $n = pq$ with an exponent $e$. Encrypt $m$ as
      $c = m^e \bmod n$. Decryption works because of Euler's generalisation of Fermat's
      little theorem, and computing the decryption key requires factoring $n$.
    turning_point_id: rsa
  - term: Discrete logarithm
    definition: >-
      Given $g$ and $g^x$ in a finite group, find $x$. Easy one way, apparently hard in
      reverse. Diffie–Hellman and elliptic-curve cryptography rest on it.
    turning_point_id: elliptic-curve-cryptography
  - term: Post-quantum cryptography
    definition: >-
      Public-key systems built on problems, mostly about lattices, that no known quantum
      algorithm solves efficiently.
    turning_point_id: pqc-standards

turning_points:
  - id: diffie-hellman
    date: "1976"
    type: REFORMULATION
    title: "Diffie and Hellman: New Directions in Cryptography"
    description: >-
      Whitfield Diffie and Martin Hellman show that two parties can agree on a shared
      secret over a public channel. Each raises a public number to a private power modulo
      a prime, exchanges the result, and raises again. An eavesdropper would have to
      solve a discrete logarithm. The paper also proposes the idea of public-key
      encryption and digital signatures.
    contested: true
    contested_note: >-
      Priority was hidden for twenty years. At Britain's GCHQ, James Ellis had proposed
      "non-secret encryption" in 1970, and Malcolm Williamson found the equivalent of
      Diffie–Hellman key exchange in 1974. Their work was classified until 1997. Ralph
      Merkle had independently devised a public key-agreement scheme in 1974, and Hellman
      has argued the method should be called Diffie–Hellman–Merkle.
    sources:
      - citation: "Diffie, W. & Hellman, M. E. (1976). New directions in cryptography. IEEE Transactions on Information Theory 22(6): 644–654."
        url: null
      - citation: "Levy, S. (2001). Crypto: How the Code Rebels Beat the Government — Saving Privacy in the Digital Age. Viking."
        url: null

  - id: rsa
    date: "1977"
    type: REFORMULATION
    title: RSA turns Fermat's little theorem into a lock
    description: >-
      Ron Rivest, Adi Shamir and Leonard Adleman at MIT find a practical public-key
      system: encryption is raising to a power modulo $n = pq$, and decryption undoes it
      by Euler's theorem, which only someone who knows $p$ and $q$ can apply. Martin
      Gardner's 1977 Scientific American column challenged readers to break a 129-digit
      example. It took until 1994 and hundreds of volunteers' computers.
    contested: true
    contested_note: >-
      Clifford Cocks at GCHQ had devised essentially the same system in 1973, weeks after
      joining, but it was classified and never deployed. His priority became public only
      in 1997, after RSA had been patented and commercialised. Rivest, Shamir and Adleman
      discovered it independently and made it public.
    sources:
      - citation: "Rivest, R. L., Shamir, A. & Adleman, L. (1978). A method for obtaining digital signatures and public-key cryptosystems. Communications of the ACM 21(2): 120–126."
        url: null
      - citation: "Singh, S. (1999). The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography. Doubleday."
        url: null

  - id: elliptic-curve-cryptography
    date: "1985"
    type: REFORMULATION
    title: Elliptic-curve cryptography
    description: >-
      Neal Koblitz and Victor Miller independently propose doing Diffie–Hellman-style
      cryptography in the group of points on an elliptic curve over a finite field. No
      general shortcut for the discrete logarithm is known there, so much shorter keys
      give the same security. Once a pure topic of arithmetic geometry, elliptic curves
      now protect most web connections.
    contested: false
    sources:
      - citation: "Koblitz, N. (1987). Elliptic curve cryptosystems. Mathematics of Computation 48(177): 203–209."
        url: null
      - citation: "Miller, V. S. (1986). Use of elliptic curves in cryptography. In Advances in Cryptology — CRYPTO '85, Lecture Notes in Computer Science 218: 417–426."
        url: null

  - id: shor-algorithm
    date: "1994"
    type: CRISIS
    title: Shor's algorithm threatens it all
    description: >-
      Peter Shor shows that a large enough quantum computer could factor integers and
      compute discrete logarithms efficiently, breaking RSA, Diffie–Hellman and
      elliptic-curve cryptography at once. No such computer yet exists. Encrypted data
      recorded today could be decrypted when one does, so the threat drove a worldwide
      replacement effort.
    contested: false
    sources:
      - citation: "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing 26(5): 1484–1509. (Conference version 1994.)"
        url: null

  - id: aks-primality
    date: "2002"
    type: PROOF
    title: "PRIMES is in P"
    description: >-
      Manindra Agrawal and his students Neeraj Kayal and Nitin Saxena, at the Indian
      Institute of Technology Kanpur, give the first algorithm that decides whether a
      number is prime in guaranteed polynomial time, without randomness or unproved
      hypotheses. It is based on a generalisation of Fermat's little theorem. In
      practice faster randomised tests are used, but a long-standing theoretical
      question was settled.
    contested: false
    sources:
      - citation: "Agrawal, M., Kayal, N. & Saxena, N. (2004). PRIMES is in P. Annals of Mathematics 160(2): 781–793."
        url: null

  - id: pqc-standards
    date: 2016 – 2024
    type: REFORMULATION
    title: Post-quantum standards are chosen
    description: >-
      After an eight-year public competition, the US National Institute of Standards and
      Technology publishes its first post-quantum standards in 2024. The main
      key-exchange standard is based on hard problems in lattices over rings of algebraic
      integers. Deployment in browsers and operating systems is under way.
    contested: false
    sources:
      - citation: "National Institute of Standards and Technology (2024). FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard."
        url: null

open_problems:
  - id: one-way-functions
    name: Do one-way functions exist?
    status: conjectured
    status_note: Unproven as of writing; would imply P ≠ NP.
    description: >-
      All of public-key cryptography assumes that some functions are easy to compute but
      infeasible to invert, and that factoring and discrete logarithms are among them.
      No one has proved that any such function exists.
    why_hard: >-
      Proving a problem is hard means ruling out every possible algorithm, including ones
      no one has imagined. That is at least as hard as proving P ≠ NP, the central open
      problem of computer science. Several known proof techniques are provably too weak.
    unlocks: >-
      A proof would put cryptography on a guaranteed foundation. Its failure, meaning a
      fast factoring algorithm, would break much of today's security overnight.
    sources:
      - citation: "Cook, S. (2006). The P versus NP problem. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 87–104. Clay Mathematics Institute / AMS."
        url: null

  - id: lattice-hardness
    name: Are lattice problems truly quantum-hard?
    status: open
    status_note: Open as of writing; the new standards assume so.
    description: >-
      Post-quantum cryptography assumes that finding short vectors in high-dimensional
      lattices, and related "learning with errors" problems, stay hard even for quantum
      computers. Decades of attacks support the assumption, but it is not proven.
    why_hard: >-
      Regev showed in 2005 that breaking learning-with-errors would solve worst-case
      lattice problems, a strong guarantee. But the practical schemes use structured
      lattices from number rings, whose extra algebraic structure might, in principle, be
      exploited. Every new quantum algorithm is scrutinised for exactly that.
    unlocks: >-
      Confidence that the replacement for RSA and elliptic curves will last.
    sources:
      - citation: "Regev, O. (2009). On lattices, learning with errors, random linear codes, and cryptography. Journal of the ACM 56(6): 34."
        url: null

applications:
  - area: The web
    title: Every HTTPS connection
    description: >-
      When a browser connects securely, it agrees a fresh key with the server using
      elliptic-curve Diffie–Hellman and checks the server's identity through a chain of
      digital signatures. Increasingly a post-quantum key exchange is combined with it.
    sources:
      - citation: "Rescorla, E. (2018). The Transport Layer Security (TLS) Protocol Version 1.3. RFC 8446. Internet Engineering Task Force."
        url: https://www.rfc-editor.org/rfc/rfc8446
  - area: Software and identity
    title: Digital signatures
    description: >-
      Operating-system updates, app stores, electronic passports and legally binding
      e-signatures are verified with public-key signatures, so tampering is detectable
      by anyone.
    sources:
      - citation: "National Institute of Standards and Technology (2023). FIPS 186-5: Digital Signature Standard (DSS)."
        url: null
  - area: Finance
    title: Cryptocurrencies
    description: >-
      Bitcoin ownership is nothing but control of a private key. Transactions are
      authorised with elliptic-curve signatures on the curve secp256k1.
    sources:
      - citation: "Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System."
        url: null

further_reading:
  - citation: "Singh, S. (1999). The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography. Doubleday."
    url: null
    note: A popular history of codes, ending with public-key cryptography and its secret British prehistory.
  - citation: "Levy, S. (2001). Crypto: How the Code Rebels Beat the Government. Viking."
    url: null
    note: The story of Diffie, Hellman, RSA and the fight over public cryptography.
  - citation: "Hoffstein, J., Pipher, J. & Silverman, J. H. (2014). An Introduction to Mathematical Cryptography (2nd ed.). Springer."
    url: null
    note: An undergraduate textbook covering RSA, elliptic curves and lattice-based systems.
---

## The Key Distribution Problem

Every cipher in history had the same weakness. Sender and receiver needed the same secret key, and they had to share it somehow beforehand, by courier, diplomatic bag or codebook. In a world of millions of strangers exchanging data, that was impossible.

In 1976 {{fig:diffie|Whitfield Diffie}} and {{fig:hellman|Martin Hellman}} showed it was unnecessary. Take a large prime $p$ and a base $g$. Alice picks a secret $a$ and sends $g^a \bmod p$; Bob picks $b$ and sends $g^b \bmod p$. Each raises what they received to their own secret, and both arrive at $g^{ab} \bmod p$. An eavesdropper sees only $g^a$ and $g^b$, and recovering $a$ from $g^a$, a *discrete logarithm*, has no known fast method. The arithmetic is from [elementary number theory](/math/elementary-number-theory/). The idea was new.

## RSA

A year later, three MIT researchers, {{fig:rivest|Ron Rivest}}, {{fig:shamir|Adi Shamir}} and {{fig:adleman|Leonard Adleman}}, found a full public-key cipher. Publish $n = pq$, the product of two large secret primes, and an exponent $e$. Anyone can encrypt a message $m$ as $m^e \bmod n$. Undoing it needs an exponent $d$ that can be computed only by someone who knows $p$ and $q$, and it works because of Euler's generalisation of Fermat's little theorem: a 1640 curiosity turned into the lock on the world's data.

The story had a secret prologue. At Britain's signals intelligence agency GCHQ, {{fig:james-ellis|James Ellis}} had conceived of "non-secret encryption" in 1970. {{fig:cocks|Clifford Cocks}} found essentially RSA in 1973, and Malcolm Williamson found Diffie–Hellman in 1974. All of it stayed classified until 1997.

## Curves and Primes

In 1985 {{fig:koblitz|Neal Koblitz}} and {{fig:victor-miller|Victor Miller}} independently proposed moving the discrete logarithm into the group of points on an elliptic curve, the central object of [arithmetic geometry](/math/arithmetic-geometry/). No known shortcut works there, so a 256-bit elliptic-curve key matches a roughly 3,000-bit RSA key. Elliptic curves, studied for their own beauty since Mordell, now carry most secure web traffic.

Cryptography also needs a plentiful supply of large primes, and a fast way to recognise them. In 2002 {{fig:agrawal|Manindra Agrawal}} and his students Neeraj Kayal and Nitin Saxena proved that primality can be decided in guaranteed polynomial time, using a generalisation of Fermat's little theorem. Gauss had called telling primes from composites one of the most important problems in arithmetic, in the *Disquisitiones*.

## A Closer Look: RSA and Diffie–Hellman with Small Numbers

Real keys use numbers hundreds of digits long, but the mechanics fit on a napkin.

**RSA.** Choose two primes, $p = 5$ and $q = 11$, and publish $n = 55$. Compute $(p - 1)(q - 1) = 40$ and choose a public exponent sharing no factor with 40, say $e = 3$. The private exponent is the $d$ with $3d \equiv 1 \pmod{40}$: $d = 27$, since $3 \times 27 = 81 = 2 \times 40 + 1$. The public key is $(55, 3)$, and the private key is $27$.

To send the message $m = 7$, anyone computes

$$
c = 7^3 \bmod 55 = 343 \bmod 55 = 13 .
$$

The key holder recovers it: $13^{27} \bmod 55 = 7$. It works because of Euler's version of Fermat's little theorem, and finding $d$ requires knowing $(p-1)(q-1)$, which requires factoring $n$. Factoring 55 is trivial. Factoring a product of two 300-digit primes is, as far as anyone knows, infeasible.

**Diffie–Hellman.** Alice and Bob agree in public on a prime $p = 23$ and a base $g = 5$. Alice secretly picks $a = 6$ and sends $5^6 \bmod 23 = 8$. Bob secretly picks $b = 15$ and sends $5^{15} \bmod 23 = 19$. Each raises what they received to their own secret:

$$
19^6 \bmod 23 = 2, \qquad 8^{15} \bmod 23 = 2 .
$$

Both now hold the shared secret 2, which never crossed the wire. An eavesdropper who saw 23, 5, 8 and 19 must recover 6 from $5^a \equiv 8$, a discrete logarithm. With a 2048-bit prime, or on an elliptic curve, no efficient classical method is known. Shor's quantum algorithm would find it quickly, which is why both systems are being replaced.

## The Quantum Threat

In 1994 {{fig:shor|Peter Shor}} showed that a quantum computer could factor numbers and compute discrete logarithms efficiently. RSA, Diffie–Hellman and elliptic curves would all fall. No machine is yet large enough, but data intercepted now could be read later, so the replacement has already begun. In 2024 the US standards body published its first post-quantum standards, built on hard problems in lattices over rings of [algebraic integers](/math/algebraic-number-theory/).

Beneath it all lies an unproved assumption. Every public-key system presumes that some problems are genuinely hard, that one-way functions exist, and no one has proved it. That question belongs to [computational complexity](/math/computational-complexity/), where it sits beside P versus NP. The security of the digital world rests, in the end, on a conjecture.
