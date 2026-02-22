## Let Me Be Sphere:
### Interactive Visualizations of Projective Varieties in Spherical Geometry
Katie Hess, Charlie Ruppe, and Jake Schaefer


## We are illustrating Math, what does that mean?
We are taking objects living in 3D space and determining how to color pictures
to give the *impression* of those objects living in the real world.


## Perspective in art
Artists have refined this process over centuries, eventually developing tools of
perspective to make more accurate pictures.

When drawing with perspective, artists draw "points at infinity" 
placed on the horizon denoting where parallel lines in the scene converge.

If two lines are headed in the same direction, no matter how far apart they are
they will appear to converge at the same point at infinity.

Note: Add perspective drawing and railroad tracks


## Perspective in math

Mathematicians go further by considering these points at infinity as genuine
points of the scene! We call this projective space.

$$ \mathbb P^n = \mathbb R^n \cup \{ p_l \mid l \text{is a line passing through
the origin } \}$$ We've taken the entire real plane and defined some extra
points. Each extra point *corresponds* to some direction off to infinity,
represented as a line through the origin.

Note: Not sure where exactly we will introduce this

Another useful and equivalent definition is
$$ \mathbb P^n = \{ \text{ lines in } \mathbb R^{n+1} \}.$$


Where are these points $p_l$ at infinity?

How do they relate to the other points?


## Properties 

The point $p_l$ is the unique intersection of $l$ and all lines parallel to $l$.

Thus in 2D projective space $\mathbb P^2$, all lines converge at exactly one
point. So the point at infinity for a given direction is the same as the point
at infinity for the opposite direction.

Note: Include a diagram.
For example, on an infinite plane with cardinal directions, the point at
infinity for north is the same point at infinity for going south, but it's
different from the point at infinity going east.

In 3 and higher dimensions can have lines with no intersection, when the
lines are *skew*

Note: include a picture of skew lines here


## Properties

One of the nicest results in projective space is Bezout's theorem.

If $p$ and $q$ are polynomials of degree $c$ and $d$ then their values coincide
at exactly $cd$-many points (counting multiplicities and complex solutions). 
Equivalently, their common solution set 
$$ \{ x \in \mathbb P^2 \mid p(x) = q(x) = 0 \}$$
is just a collection of $cd$-many points.

## Examples
Lines in $\mathbb P^2$ are the zero set of degree one polynomials and we see
that their intersection is just 1 point.

Two lines together is degree 2, and intersect with one more line and you get 2
intersections (counting multiplicity).

A hyperbola is degree 2 and its asymptote is degree 1. They intersect at
infinity once with multiplicity 2.

## A better way to view $\mathbb{P^2}$
discuss the double cover from S^3





