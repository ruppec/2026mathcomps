---
title: "Quartic Surfaces Containing a Line"
date: "2026-03-01"
---


Here we are visualizing a quartic surface containing a line in the spherical
geometry of $\mathbb{RP}^3$.

<canvas id="canvas" style="height: 500px; max-width: 100%;
display: block;"></canvas>
<script type="module">
    import init from "./my_wgpu_project.js";
    init().then(() => {console.log("WASM Loaded");});
</script>

In the space of all quartic surfaces it is exceedingly rare that one contains a
line, specifically it occurs with measure zero. For an explantion [see
here](#lines-on-surfaces)


We are further refining our interest in quartic surfaces defined by two cubic
curves.

Note that if a plane contains a line $L$ that lines a quartic surface, then the
intersection of that plane with the quartic surface will be a quartic curve
containing a line, meaning the remaining curve will be of degree at most 3
(allowing for multiplicity of $L$).

If without loss of generality let's let $L = \{ x_0 = x_1 = 0 \}$, then given two
cubic curves, $p(x_0,x_2, x_3)$ and $q(x_1, x_2, x_3)$ we define the quartic
surface

$$ f = x_0 p + x_1 q$$

which vanishes on $L$ since then $x_0=x_1=0$. When $x_0=0$ we recover $f= x_1 q$
and when $x_1 = 0$ we recover $f = x_0 p$. So these defining curves live on the
surface in orthogonal planes. If we consider the whole family of planes
containing $L$ we get a corresponding smooth family of cubic curves.
This is an example of (a real slice of) an elliptic K3 surface.



## Why do most quartics not contain a line? {#lines-on-surface}

The set of all quartic surfaces is itself a space, and the set of all quartic
surfaces containing a line is a subspace.
Both spaces have a dimension and the dimension of quartics containing a line is
1 dimension lower than the dimension of the full space of quartics. You would
say that the space of quartics containing a line has *codimension* 1.

Since we are considering surfaces in $\mathbb P^3$ our quartic surface is
defined by a homogenous polynomial $f$ of degree 3 in $\mathbb C[x_0, x_1, x_2, x_3]$.

This polynomial can be written as a linear combination of terms, monomial terms
that look like $x_0^{e_0} x_1^{e_1} x_2^{e_2} x_3 {e^3}$ for $e_i \geq 0$ and $e_0 + e_1 +
e_2 + e_3 = 4$.

How many such polynomials are there? The answer is 35.

To prove this we can use the "stars and bars" argument. We are trying to split
the degree $d$ between the values $e_0, e_1, e_2, e_3$. In general distributing
$d$ identical items between $n$ bins. Any way of distribution can be represented
as a string of $d$ `*`'s representing value and $n-1$ `|`'s seperating the
bins. For example the string ``` *|**|*| ``` corresponds to the monomial $x_0
x_1^2 x_2$. In total the string will always be length $d+n-1$ and each string is
uniquely defined by a choice of where to put the stars. So the number of
possible strings and hence the number of monomials is ${d+n-1}\choose d$. In
our case of $d=4$ and $n=4$ we get 35.

Now consider the projective line

$$ L = \{ [x_1 : x_2: x_3: x_4] \mid x_2 = x_3 = 0 \}$$

If we restrict $f$ to $L$ all the terms with $x_2$ or $x_3$ vanish and we get

$$ f \mid _L = A x_0^4 + B x_0^3 x_1^2 + C x_0^2 x_1^2 + D x_0 x_1^3 + E x_1^4$$

Now if $L$ is contained in the surface that means that $f$ vanishes on $L$. So
f\mid _L$ must be the zero polynomial and all those coefficients must be zero.

So asking that the surface contains $L$ is a 5 equation constraint in the
coefficient space meaning the space of quartics containing $L$ is degree 30.

But we asked about the space of quartics contianing any line, not $L$
specifically. To answer this we have to "quotient" both spaces.

The group $GL(4)$ of 4x4 matrices acts on our affine space $\mathbb C^4$ in the
natural way. Considering the set of orbits of quartics under this $GL(4)$ action
gives us a way to think about a quartic up to its embedding in the space.

We will also consider the orbit of quartics containing $L$ under the action of $G$
where $G$ is defined 

$$ G = \{ M \in GL(4) \mid M(L) = L \},$$

the $GL(4)$-stabilizer subgroup of $L$. By the way we've constructed $L$, this
condition is equivalent to asking that $M$ is a matrix whose bottom left 2x2
submatrix is filled with zeros. The rest of the matrix is completely
unconstrained which makes $G$ a 12-dimensional space, 4 less than the
16-dimensional space of $GL(4)$.

There is a natural injection from the set of orbits of quartics with $L$ to
the set of orbits of quartics. Yet we compute the dimension of the space 
of quartics up to embedding as 35 - 16 = 19 and the dimension of the space of
quartics with $L$ as 30 - 12 = 18.

And we are done.


This same story can be repeated with replacing quartic with cubic or quadric and
the dimensions will line up differently. More to come on this soon.

