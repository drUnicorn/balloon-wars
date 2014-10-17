var h, s = {};
window.Vadstena = s;
window.ga = null != window.ga ? window.ga : {};
window.VadstenaMap_ = null != window.VadstenaMap_ ? window.VadstenaMap_ : null;
s.Aa = Array;
s.Fd = {};
s.Fd.create = function(a) {
    var b = new s.Aa(2);
    a && (b[0] = a[0], b[1] = a[1]);
    return b
};
s.Ub = {};
s.Ub.create = function(a) {
    var b = new s.Aa(4);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]);
    return b
};
s.Ub.Zb = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
};
s.J = {};
s.J.create = function(a) {
    var b = new s.Aa(3);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2]);
    return b
};
s.J.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    return b
};
s.J.add = function(a, b, c) {
    if (!c || a == c) return a[0] += b[0], a[1] += b[1], a[2] += b[2], a;
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    return c
};
s.J.Xd = function(a, b, c) {
    if (!c || a == c) return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a;
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
    c[2] = a[2] - b[2];
    return c
};
s.J.Qd = function(a, b) {
    b || (b = a);
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    return b
};
s.J.scale = function(a, b, c) {
    if (!c || a == c) return a[0] *= b, a[1] *= b, a[2] *= b, a;
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    return c
};
s.J.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        f = Math.sqrt(c * c + d * d + e * e);
    if (f) {
        if (1 == f) return b[0] = c, b[1] = d, b[2] = e, b
    } else return b[0] = 0, b[1] = 0, b[2] = 0, b;
    f = 1 / f;
    b[0] = c * f;
    b[1] = d * f;
    b[2] = e * f;
    return b
};
s.J.Jd = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1];
    a = a[2];
    var f = b[0],
        g = b[1];
    b = b[2];
    c[0] = e * b - a * g;
    c[1] = a * f - d * b;
    c[2] = d * g - e * f;
    return c
};
s.J.length = function(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    return Math.sqrt(b * b + c * c + a * a)
};
s.J.Zb = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
s.J.direction = function(a, b, c) {
    c || (c = a);
    var d = a[0] - b[0],
        e = a[1] - b[1];
    a = a[2] - b[2];
    b = Math.sqrt(d * d + e * e + a * a);
    if (!b) return c[0] = 0, c[1] = 0, c[2] = 0, c;
    b = 1 / b;
    c[0] = d * b;
    c[1] = e * b;
    c[2] = a * b;
    return c
};
s.J.Md = function(a, b, c, d) {
    d || (d = a);
    d[0] = a[0] + c * (b[0] - a[0]);
    d[1] = a[1] + c * (b[1] - a[1]);
    d[2] = a[2] + c * (b[2] - a[2]);
    return d
};
s.J.Qb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};
s.ba = {};
s.ba.create = function(a) {
    var b = new s.Aa(9);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9]);
    return b
};
s.ba.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    return b
};
s.ba.jc = function(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;
    return a
};
s.ba.Ca = function(a, b) {
    if (!b || a == b) {
        var c = a[1],
            d = a[2],
            e = a[5];
        a[1] = a[3];
        a[2] = a[6];
        a[3] = c;
        a[5] = a[7];
        a[6] = d;
        a[7] = e;
        return a
    }
    b[0] = a[0];
    b[1] = a[3];
    b[2] = a[6];
    b[3] = a[1];
    b[4] = a[4];
    b[5] = a[7];
    b[6] = a[2];
    b[7] = a[5];
    b[8] = a[8];
    return b
};
s.ba.Ed = function(a, b) {
    b || (b = s.b.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = 0;
    b[4] = a[3];
    b[5] = a[4];
    b[6] = a[5];
    b[7] = 0;
    b[8] = a[6];
    b[9] = a[7];
    b[10] = a[8];
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
s.ba.Qb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
s.b = {};
s.b.create = function(a) {
    var b = new s.Aa(16);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]);
    return b
};
s.b.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b
};
s.b.jc = function(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
s.b.Ca = function(a, b) {
    if (!b || a == b) {
        var c = a[1],
            d = a[2],
            e = a[3],
            f = a[6],
            g = a[7],
            k = a[11];
        a[1] = a[4];
        a[2] = a[8];
        a[3] = a[12];
        a[4] = c;
        a[6] = a[9];
        a[7] = a[13];
        a[8] = d;
        a[9] = f;
        a[11] = a[14];
        a[12] = e;
        a[13] = g;
        a[14] = k;
        return a
    }
    b[0] = a[0];
    b[1] = a[4];
    b[2] = a[8];
    b[3] = a[12];
    b[4] = a[1];
    b[5] = a[5];
    b[6] = a[9];
    b[7] = a[13];
    b[8] = a[2];
    b[9] = a[6];
    b[10] = a[10];
    b[11] = a[14];
    b[12] = a[3];
    b[13] = a[7];
    b[14] = a[11];
    b[15] = a[15];
    return b
};
s.b.Kd = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        f = a[4],
        g = a[5],
        k = a[6],
        l = a[7],
        m = a[8],
        n = a[9],
        p = a[10],
        r = a[11],
        q = a[12],
        t = a[13],
        v = a[14];
    a = a[15];
    return q * n * k * e - m * t * k * e - q * g * p * e + f * t * p * e + m * g * v * e - f * n * v * e - q * n * d * l + m * t * d * l + q * c * p * l - b * t * p * l - m * c * v * l + b * n * v * l + q * g * d * r - f * t * d * r - q * c * k * r + b * t * k * r + f * c * v * r - b * g * v * r - m * g * d * a + f * n * d * a + m * c * k * a - b * n * k * a - f * c * p * a + b * g * p * a
};
s.b.inverse = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = a[4],
        k = a[5],
        l = a[6],
        m = a[7],
        n = a[8],
        p = a[9],
        r = a[10],
        q = a[11],
        t = a[12],
        v = a[13],
        y = a[14],
        z = a[15],
        H = c * k - d * g,
        I = c * l - e * g,
        A = c * m - f * g,
        B = d * l - e * k,
        C = d * m - f * k,
        D = e * m - f * l,
        E = n * v - p * t,
        F = n * y - r * t,
        G = n * z - q * t,
        J = p * y - r * v,
        K = p * z - q * v,
        L = r * z - q * y,
        w = 1 / (H * L - I * K + A * J + B * G - C * F + D * E);
    b[0] = (k * L - l * K + m * J) * w;
    b[1] = (-d * L + e * K - f * J) * w;
    b[2] = (v * D - y * C + z * B) * w;
    b[3] = (-p * D + r * C - q * B) * w;
    b[4] = (-g * L + l * G - m * F) * w;
    b[5] = (c * L - e * G + f * F) * w;
    b[6] = (-t * D + y * A - z * I) * w;
    b[7] = (n * D - r * A + q * I) * w;
    b[8] = (g * K - k * G + m * E) * w;
    b[9] =
        (-c * K + d * G - f * E) * w;
    b[10] = (t * C - v * A + z * H) * w;
    b[11] = (-n * C + p * A - q * H) * w;
    b[12] = (-g * J + k * F - l * E) * w;
    b[13] = (c * J - d * F + e * E) * w;
    b[14] = (-t * B + v * I - y * H) * w;
    b[15] = (n * B - p * I + r * H) * w;
    return b
};
s.b.Zd = function(a, b) {
    b || (b = s.b.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
s.b.Dd = function(a, b) {
    b || (b = s.ba.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[4];
    b[4] = a[5];
    b[5] = a[6];
    b[6] = a[8];
    b[7] = a[9];
    b[8] = a[10];
    return b
};
s.b.Yd = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[4],
        g = a[5],
        k = a[6],
        l = a[8],
        m = a[9],
        n = a[10],
        p = n * g - k * m,
        r = -n * f + k * l,
        q = m * f - g * l,
        t = c * p + d * r + e * q;
    if (!t) return null;
    t = 1 / t;
    b || (b = s.ba.create());
    b[0] = p * t;
    b[1] = (-n * d + e * m) * t;
    b[2] = (k * d - e * g) * t;
    b[3] = r * t;
    b[4] = (n * c - e * l) * t;
    b[5] = (-k * c + e * f) * t;
    b[6] = q * t;
    b[7] = (-m * c + d * l) * t;
    b[8] = (g * c - d * f) * t;
    return b
};
s.b.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        k = a[4],
        l = a[5],
        m = a[6],
        n = a[7],
        p = a[8],
        r = a[9],
        q = a[10],
        t = a[11],
        v = a[12],
        y = a[13],
        z = a[14];
    a = a[15];
    var H = b[0],
        I = b[1],
        A = b[2],
        B = b[3],
        C = b[4],
        D = b[5],
        E = b[6],
        F = b[7],
        G = b[8],
        J = b[9],
        K = b[10],
        L = b[11],
        w = b[12],
        X = b[13],
        Y = b[14];
    b = b[15];
    c[0] = H * d + I * k + A * p + B * v;
    c[1] = H * e + I * l + A * r + B * y;
    c[2] = H * f + I * m + A * q + B * z;
    c[3] = H * g + I * n + A * t + B * a;
    c[4] = C * d + D * k + E * p + F * v;
    c[5] = C * e + D * l + E * r + F * y;
    c[6] = C * f + D * m + E * q + F * z;
    c[7] = C * g + D * n + E * t + F * a;
    c[8] = G * d + J * k + K * p + L * v;
    c[9] = G * e + J * l + K * r + L * y;
    c[10] = G * f +
        J * m + K * q + L * z;
    c[11] = G * g + J * n + K * t + L * a;
    c[12] = w * d + X * k + Y * p + b * v;
    c[13] = w * e + X * l + Y * r + b * y;
    c[14] = w * f + X * m + Y * q + b * z;
    c[15] = w * g + X * n + Y * t + b * a;
    return c
};
s.b.Ja = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1];
    b = b[2];
    c[0] = a[0] * d + a[4] * e + a[8] * b + a[12];
    c[1] = a[1] * d + a[5] * e + a[9] * b + a[13];
    c[2] = a[2] * d + a[6] * e + a[10] * b + a[14];
    return c
};
s.b.gb = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        f = b[2];
    b = b[3];
    c[0] = a[0] * d + a[4] * e + a[8] * f + a[12] * b;
    c[1] = a[1] * d + a[5] * e + a[9] * f + a[13] * b;
    c[2] = a[2] * d + a[6] * e + a[10] * f + a[14] * b;
    c[3] = a[3] * d + a[7] * e + a[11] * f + a[15] * b;
    return c
};
s.b.translate = function(a, b, c) {
    var d = b[0],
        e = b[1];
    b = b[2];
    if (!c || a == c) return a[12] = a[0] * d + a[4] * e + a[8] * b + a[12], a[13] = a[1] * d + a[5] * e + a[9] * b + a[13], a[14] = a[2] * d + a[6] * e + a[10] * b + a[14], a[15] = a[3] * d + a[7] * e + a[11] * b + a[15], a;
    var f = a[0],
        g = a[1],
        k = a[2],
        l = a[3],
        m = a[4],
        n = a[5],
        p = a[6],
        r = a[7],
        q = a[8],
        t = a[9],
        v = a[10],
        y = a[11];
    c[0] = f;
    c[1] = g;
    c[2] = k;
    c[3] = l;
    c[4] = m;
    c[5] = n;
    c[6] = p;
    c[7] = r;
    c[8] = q;
    c[9] = t;
    c[10] = v;
    c[11] = y;
    c[12] = f * d + m * e + q * b + a[12];
    c[13] = g * d + n * e + t * b + a[13];
    c[14] = k * d + p * e + v * b + a[14];
    c[15] = l * d + r * e + y * b + a[15];
    return c
};
s.b.scale = function(a, b, c) {
    var d = b[0],
        e = b[1];
    b = b[2];
    if (!c || a == c) return a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a[4] *= e, a[5] *= e, a[6] *= e, a[7] *= e, a[8] *= b, a[9] *= b, a[10] *= b, a[11] *= b, a;
    c[0] = a[0] * d;
    c[1] = a[1] * d;
    c[2] = a[2] * d;
    c[3] = a[3] * d;
    c[4] = a[4] * e;
    c[5] = a[5] * e;
    c[6] = a[6] * e;
    c[7] = a[7] * e;
    c[8] = a[8] * b;
    c[9] = a[9] * b;
    c[10] = a[10] * b;
    c[11] = a[11] * b;
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15];
    return c
};
s.b.rotate = function(a, b, c, d) {
    var e = c[0],
        f = c[1];
    c = c[2];
    var g = Math.sqrt(e * e + f * f + c * c);
    if (!g) return null;
    1 != g && (g = 1 / g, e *= g, f *= g, c *= g);
    var k = Math.sin(b),
        l = Math.cos(b),
        m = 1 - l;
    b = a[0];
    var g = a[1],
        n = a[2],
        p = a[3],
        r = a[4],
        q = a[5],
        t = a[6],
        v = a[7],
        y = a[8],
        z = a[9],
        H = a[10],
        I = a[11],
        A = e * e * m + l,
        B = f * e * m + c * k,
        C = c * e * m - f * k,
        D = e * f * m - c * k,
        E = f * f * m + l,
        F = c * f * m + e * k,
        G = e * c * m + f * k,
        e = f * c * m - e * k,
        f = c * c * m + l;
    d ? a != d && (d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]) : d = a;
    d[0] = b * A + r * B + y * C;
    d[1] = g * A + q * B + z * C;
    d[2] = n * A + t * B + H * C;
    d[3] = p * A + v * B + I * C;
    d[4] = b * D + r *
        E + y * F;
    d[5] = g * D + q * E + z * F;
    d[6] = n * D + t * E + H * F;
    d[7] = p * D + v * E + I * F;
    d[8] = b * G + r * e + y * f;
    d[9] = g * G + q * e + z * f;
    d[10] = n * G + t * e + H * f;
    d[11] = p * G + v * e + I * f;
    return d
};
s.b.Td = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[4],
        f = a[5],
        g = a[6],
        k = a[7],
        l = a[8],
        m = a[9],
        n = a[10],
        p = a[11];
    c ? a != c && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[4] = e * b + l * d;
    c[5] = f * b + m * d;
    c[6] = g * b + n * d;
    c[7] = k * b + p * d;
    c[8] = e * -d + l * b;
    c[9] = f * -d + m * b;
    c[10] = g * -d + n * b;
    c[11] = k * -d + p * b;
    return c
};
s.b.Ud = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[0],
        f = a[1],
        g = a[2],
        k = a[3],
        l = a[8],
        m = a[9],
        n = a[10],
        p = a[11];
    c ? a != c && (c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = e * b + l * -d;
    c[1] = f * b + m * -d;
    c[2] = g * b + n * -d;
    c[3] = k * b + p * -d;
    c[8] = e * d + l * b;
    c[9] = f * d + m * b;
    c[10] = g * d + n * b;
    c[11] = k * d + p * b;
    return c
};
s.b.Vd = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var e = a[0],
        f = a[1],
        g = a[2],
        k = a[3],
        l = a[4],
        m = a[5],
        n = a[6],
        p = a[7];
    c ? a != c && (c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = e * b + l * d;
    c[1] = f * b + m * d;
    c[2] = g * b + n * d;
    c[3] = k * b + p * d;
    c[4] = e * -d + l * b;
    c[5] = f * -d + m * b;
    c[6] = g * -d + n * b;
    c[7] = k * -d + p * b;
    return c
};
s.b.Sc = function(a, b, c, d, e, f, g) {
    g || (g = s.b.create());
    var k = b - a,
        l = d - c,
        m = f - e;
    g[0] = 2 * e / k;
    g[1] = 0;
    g[2] = 0;
    g[3] = 0;
    g[4] = 0;
    g[5] = 2 * e / l;
    g[6] = 0;
    g[7] = 0;
    g[8] = (b + a) / k;
    g[9] = (d + c) / l;
    g[10] = -(f + e) / m;
    g[11] = -1;
    g[12] = 0;
    g[13] = 0;
    g[14] = -(f * e * 2) / m;
    g[15] = 0;
    return g
};
s.b.perspective = function(a, b, c, d, e) {
    a = c * Math.tan(a * Math.PI / 360);
    b *= a;
    return s.b.Sc(-b, b, -a, a, c, d, e)
};
s.b.Sd = function(a, b, c, d, e, f, g) {
    g || (g = s.b.create());
    var k = b - a,
        l = d - c,
        m = f - e;
    g[0] = 2 / k;
    g[1] = 0;
    g[2] = 0;
    g[3] = 0;
    g[4] = 0;
    g[5] = 2 / l;
    g[6] = 0;
    g[7] = 0;
    g[8] = 0;
    g[9] = 0;
    g[10] = -2 / m;
    g[11] = 0;
    g[12] = -(a + b) / k;
    g[13] = -(d + c) / l;
    g[14] = -(f + e) / m;
    g[15] = 1;
    return g
};
s.b.Nd = function(a, b, c, d) {
    d || (d = s.b.create());
    var e = a[0],
        f = a[1];
    a = a[2];
    var g = c[0],
        k = c[1],
        l = c[2];
    c = b[1];
    var m = b[2];
    if (e == b[0] && f == c && a == m) return s.b.jc(d);
    var n, p, r, q;
    c = e - b[0];
    m = f - b[1];
    b = a - b[2];
    q = 1 / Math.sqrt(c * c + m * m + b * b);
    c *= q;
    m *= q;
    b *= q;
    n = k * b - l * m;
    l = l * c - g * b;
    g = g * m - k * c;
    (q = Math.sqrt(n * n + l * l + g * g)) ? (q = 1 / q, n *= q, l *= q, g *= q) : g = l = n = 0;
    k = m * g - b * l;
    p = b * n - c * g;
    r = c * l - m * n;
    (q = Math.sqrt(k * k + p * p + r * r)) ? (q = 1 / q, k *= q, p *= q, r *= q) : r = p = k = 0;
    d[0] = n;
    d[1] = k;
    d[2] = c;
    d[3] = 0;
    d[4] = l;
    d[5] = p;
    d[6] = m;
    d[7] = 0;
    d[8] = g;
    d[9] = r;
    d[10] = b;
    d[11] = 0;
    d[12] = -(n * e + l * f + g * a);
    d[13] = -(k * e + p * f + r * a);
    d[14] = -(c * e + m * f + b * a);
    d[15] = 1;
    return d
};
s.b.Qb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
s.R = {};
s.R.create = function(a) {
    var b = new s.Aa(4);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]);
    return b
};
s.R.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    return b
};
s.R.Id = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2];
    if (!b || a == b) return a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), a;
    b[0] = c;
    b[1] = d;
    b[2] = e;
    b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
    return b
};
s.R.inverse = function(a, b) {
    if (!b || a == b) return a[0] *= 1, a[1] *= 1, a[2] *= 1, a;
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    b[3] = a[3];
    return b
};
s.R.length = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2];
    a = a[3];
    return Math.sqrt(b * b + c * c + d * d + a * a)
};
s.R.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = Math.sqrt(c * c + d * d + e * e + f * f);
    if (0 == g) return b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0, b;
    g = 1 / g;
    b[0] = c * g;
    b[1] = d * g;
    b[2] = e * g;
    b[3] = f * g;
    return b
};
s.R.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        f = a[2];
    a = a[3];
    var g = b[0],
        k = b[1],
        l = b[2];
    b = b[3];
    c[0] = d * b + a * g + e * l - f * k;
    c[1] = e * b + a * k + f * g - d * l;
    c[2] = f * b + a * l + d * k - e * g;
    c[3] = a * b - d * g - e * k - f * l;
    return c
};
s.R.Ja = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        f = b[2];
    b = a[0];
    var g = a[1],
        k = a[2];
    a = a[3];
    var l = a * d + g * f - k * e,
        m = a * e + k * d - b * f,
        n = a * f + b * e - g * d,
        d = -b * d - g * e - k * f;
    c[0] = l * a + d * -b + m * -k - n * -g;
    c[1] = m * a + d * -g + n * -b - l * -k;
    c[2] = n * a + d * -k + l * -g - m * -b;
    return c
};
s.R.Dd = function(a, b) {
    b || (b = s.ba.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = c + c,
        k = d + d,
        l = e + e,
        m = c * g,
        n = c * k,
        c = c * l,
        p = d * k,
        d = d * l,
        e = e * l,
        g = f * g,
        k = f * k,
        f = f * l;
    b[0] = 1 - (p + e);
    b[1] = n - f;
    b[2] = c + k;
    b[3] = n + f;
    b[4] = 1 - (m + e);
    b[5] = d - g;
    b[6] = c - k;
    b[7] = d + g;
    b[8] = 1 - (m + p);
    return b
};
s.R.Ed = function(a, b) {
    b || (b = s.b.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = c + c,
        k = d + d,
        l = e + e,
        m = c * g,
        n = c * k,
        c = c * l,
        p = d * k,
        d = d * l,
        e = e * l,
        g = f * g,
        k = f * k,
        f = f * l;
    b[0] = 1 - (p + e);
    b[1] = n - f;
    b[2] = c + k;
    b[3] = 0;
    b[4] = n + f;
    b[5] = 1 - (m + e);
    b[6] = d - g;
    b[7] = 0;
    b[8] = c - k;
    b[9] = d + g;
    b[10] = 1 - (m + p);
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
s.R.Wd = function(a, b, c, d) {
    d || (d = a);
    var e = c;
    0 > a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] && (e = -1 * c);
    d[0] = 1 - c * a[0] + e * b[0];
    d[1] = 1 - c * a[1] + e * b[1];
    d[2] = 1 - c * a[2] + e * b[2];
    d[3] = 1 - c * a[3] + e * b[3];
    return d
};
s.R.Qb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};
s.Tc = function(a, b, c, d, e, f) {
    var g = b - a,
        k = d - c,
        l = f - e;
    a = s.b.create([2 * e / g, 0, (b + a) / g, 0, 0, 2 * e / k, (d + c) / k, 0, 0, 0, -(f + e) / l, -2 * f * e / l, 0, 0, -1, 0]);
    s.b.Ca(a);
    return a
};
s.md = function(a, b, c, d) {
    a = c * Math.tan(a * Math.PI / 360);
    b *= a;
    return s.Tc(-b, b, -a, a, c, d)
};
s.Pa = function(a, b) {
    var c = Math.cos(b),
        d = Math.sin(b);
    switch (a) {
        case 0:
            c = s.b.create([1, 0, 0, 0, 0, c, -d, 0, 0, d, c, 0, 0, 0, 0, 1]);
            break;
        case 1:
            c = s.b.create([c, 0, -d, 0, 0, 1, 0, 0, d, 0, c, 0, 0, 0, 0, 1]);
            break;
        default:
            c = s.b.create([c, -d, 0, 0, d, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    s.b.Ca(c);
    return c
};
s.pb = function(a, b, c) {
    a = s.b.create([a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1]);
    s.b.Ca(a);
    return a
};
s.rd = function(a) {
    return s.pb(a, a, a)
};
s.xa = function(a, b, c) {
    a = s.b.create([1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1]);
    s.b.Ca(a);
    return a
};
s.$d = function(a) {
    return s.xa(a[0], a[1], 0)
};
s.ae = function(a) {
    return s.xa(a[0], a[1], a[2])
};
s.na = function(a, b, c) {
    a < b ? a = b : a > c && (a = c);
    return a
};
s.Z = function(a) {
    return a * Math.PI / 180
};
s.vc = function(a) {
    var b = 7;
    if (0 > a) return a = -a + "", b--, a.length >= b ? "-" + a : "-" + (Array(b - a.length + 1).join("0") + a);
    a += "";
    return a.length >= b ? a : Array(b - a.length + 1).join("0") + a
};
s.vd = function(a, b) {
    return a.replace(/\{([_$a-zA-Z0-9][_$a-zA-Z0-9]*)\}/g, function(a, d) {
        return d in b ? b[d] : a
    })
};
s.mc = function(a, b, c) {
    var d = new XMLHttpRequest;
    d.onload = function() {
        var a = d.response;
        try {
            var f = eval("(" + a + ")")
        } catch (g) {
            null != c && c();
            return
        }
        null != b && b(f)
    }.bind(this);
    d.onerror = function() {
        null != c && c()
    }.bind(this);
    d.open("GET", a, !0);
    d.send("")
};
s.lc = function(a, b, c) {
    var d = new XMLHttpRequest;
    d.onreadystatechange = function() {
        switch (d.readyState) {
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            case 4:
                if (404 == d.status) {
                    null != c && c();
                    break
                }
                var a = new DataView(d.response);
                null != b && b(a);
                break;
            default:
                null != c && c()
        }
    }.bind(this);
    d.onerror = function() {
        null != c && c()
    }.bind(this);
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.send("")
};
window.performance = window.performance || {};
performance.now = performance.now || performance.Od || performance.Pd || performance.Rd || performance.webkitNow || function() {
    return (new Date).getTime()
};
window.Bc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
    window.setTimeout(a, 1E3 / 60)
};

function aa(a, b, c) {
    this.A = new u(a);
    this.pc = this.qc = this.Ab = 0;
    this.$a = [];
    this.Za = [0, 0, 0];
    this.Nc = c;
    this.Gc = this.oc = this.rc = "";
    null != b.foat && (this.A.k = b.foat[0], this.A.n = b.foat[1], this.A.p = b.foat[2], this.Ab = b.foat[3]);
    null != b.meta && (this.qc = b.meta[0], this.pc = b.meta[1]);
    this.rc = b.metaTemplate;
    this.oc = b.meshTemplate;
    this.Gc = b.textureTemplate;
    if (null != b.defaultPosition && null != b.defaultOrientation)
        for (a = 0; 3 > a; a++) this.$a[a] = b.defaultPosition[a], this.Za[a] = b.defaultOrientation[a]
}

function x(a, b) {
    return b > a.A.k ? a.Ab >> b - a.A.k : a.Ab << a.A.k - b
}

function ba(a, b) {
    return ca(a, a.rc, b)
}

function da(a, b) {
    return ca(a, a.oc, b)
}

function ea(a, b) {
    return ca(a, a.Gc, b)
}

function ca(a, b, c) {
    b = s.vd(b, {
        lod: c.k,
        easting: s.vc(c.n),
        northing: s.vc(c.p)
    });
    return a.Nc + b
}

function fa(a, b, c) {
    var d = x(a, 10),
        e = Math.round((b[0] - a.A.n) / d),
        f = Math.round((b[1] - a.A.p) / d);
    return null != c ? (c[0] = a.A.n + e * d, c[1] = a.A.p + f * d, c[2] = b[2], c) : [a.A.n + e * d, a.A.p + f * d, b[2]]
}

function ha(a) {
    this.vb = 1073741824;
    this.ec = 402653184;
    this.La = 4;
    this.Xb = 45;
    this.Xa = 6E5;
    this.s = 180;
    this.wb = this.Xa;
    this.yb = -90;
    this.xb = -10;
    this.ia = "aboveTerrainByPixelSize";
    this.V = this.s / 5;
    this.fc = 8;
    this.gc = 32;
    this.ic = 256;
    this.wa = "./skydome.jpg";
    this.oa = [0.8, 0.8, 0.8];
    this.U = "observer";
    if (null != a && (null != a.cacheSize && (this.vb = a.cacheSize), null != a.gpuCacheSize && (this.ec = a.gpuCacheSize), null != a.numThreads && (this.La = a.numThreads), null != a.cameraFOV && (this.Xb = a.cameraFOV), null != a.cameraVisibility && (this.Xa =
            a.cameraVisibility), null != a.cameraMinDistance && (this.s = a.cameraMinDistance), null != a.cameraMaxDistance && (this.wb = a.cameraMaxDistance), null != a.cameraMinTilt && (this.yb = a.cameraMinTilt), null != a.cameraMaxTilt && (this.xb = a.cameraMaxTilt), null != a.cameraConstrainMode && (this.ia = a.cameraConstrainMode, this.V = this.s / 5), null != a.gridEmbeddingFactor && (this.fc = a.gridEmbeddingFactor), null != a.gridMinTileSize && (this.gc = a.gridMinTileSize), null != a.skydomeTexture && (this.wa = a.skydomeTexture), null != a.hitTextureSize && (this.ic =
            a.hitTextureSize), null != a.controlMode && (this.U = a.controlMode), null != a.controlInertia))
        for (var b = 0; 3 > b; b++) this.oa[b] = a.controlInertia[b]
};

function ia(a, b, c, d, e, f) {
    this.g = [];
    this.m = [];
    this.g[0] = null != a ? a : Number.POSITIVE_INFINITY;
    this.g[1] = null != b ? b : Number.POSITIVE_INFINITY;
    this.g[2] = null != c ? c : Number.POSITIVE_INFINITY;
    this.m[0] = null != d ? d : Number.NEGATIVE_INFINITY;
    this.m[1] = null != e ? e : Number.NEGATIVE_INFINITY;
    this.m[2] = null != f ? f : Number.NEGATIVE_INFINITY
}

function M(a, b) {
    return a.m[b] - a.g[b]
}

function ja(a, b) {
    return new ia(a.g[0] - b[0], a.g[1] - b[1], a.g[2], a.m[0] - b[0], a.m[1] - b[1], a.m[2])
};

function ka(a) {
    this.sa = [];
    this.fb = null != a ? a : Number.MAX_VALUE;
    this.N = this.X = null;
    this.la = 0
}
h = ka.prototype;
h.log = function() {
    for (var a = 0, b = this.N; null != b.da && !(b = this.sa[b.da][3], a++, 10 < a););
    this.sa.forEach(function() {})
};
h.find = function(a) {
    a = this.hash(a);
    a = this.sa[a];
    if (null != a) {
        if (this.N != a) {
            null != a.ea && (a.ea.da = a.da);
            null != a.da && (a.da.ea = a.ea);
            this.X == a && (this.X = a.ea);
            var b = this.N;
            this.N = a;
            this.N.da = b;
            this.N.ea = null;
            b.ea = this.N
        }
        return a.cb
    }
    return null
};
h.contains = function(a) {
    return null != this.sa[this.hash(a)]
};
h.clear = function() {
    for (var a = this.N; null != a;) null != a.cb && a.cb.w(), a = a.da;
    this.sa = [];
    this.N = this.X = null;
    this.la = 0
};

function la(a, b, c, d) {
    b = a.hash(b);
    c = {
        Xc: b,
        cb: c,
        Pc: d,
        ea: null,
        da: a.N
    };
    null != a.N && (a.N.ea = c);
    a.N = c;
    null == a.X && (a.X = c);
    a.sa[b] = c;
    a.la += d;
    ma(a)
}

function ma(a) {
    for (; a.la > a.fb;) {
        var b = a.X;
        if (null != b) a.X = a.X.ea, null != a.X && (a.X.da = null), a.sa[b.Xc] = null, a.la -= b.Pc, b.cb.w();
        else break
    }
}
h.hash = function(a) {
    return "" + Math.round(a.k) + "." + Math.round(a.n) + "." + Math.round(a.p)
};

function na(a, b, c, d, e) {
    null == d && (d = 1);
    this.c = a;
    this.La = d;
    this.sb = 0;
    this.G = new ka(b);
    this.ua = [];
    this.ib = [];
    this.qa = [];
    this.sc = c;
    this.$b = e
}
h = na.prototype;
h.get = function(a) {
    var b = this.G.find(a);
    null == b && this.Kb(a);
    return b
};
h.contains = function(a) {
    return this.G.contains(a)
};
h.trim = function(a) {
    var b = this.G.fb,
        c = this.G;
    c.fb = a;
    ma(c);
    a = this.G;
    a.fb = b;
    ma(a)
};
h.reset = function() {
    this.G.clear()
};
h.size = function() {
    return this.G.la
};
h.Kb = function(a) {
    var b = this.G.hash(a),
        c = this.qa.indexOf(b); - 1 == c && (c = this.ua.indexOf(b), -1 != c && (this.ua.splice(c, 1), this.ib.splice(c, 1)), this.ua.unshift(b), this.ib.unshift(a), 20 < this.ua.length && (this.ua.pop(), this.ib.pop()))
};
h.update = function() {
    if (0 < this.ua.length && this.sb < this.La) {
        var a = this.ua.shift(),
            b = this.ib.shift();
        if (-1 == this.qa.indexOf(a)) {
            this.qa.push(a);
            this.sb++;
            var a = function(a, b) {
                    this.qa.splice(this.qa.indexOf(this.G.hash(a)), 1);
                    this.sb--;
                    la(this.G, a, b, b.size());
                    null != this.sc && this.sc(a)
                }.bind(this),
                c = function(a) {
                    this.qa.splice(this.qa.indexOf(this.G.hash(a)), 1);
                    this.sb--
                }.bind(this);
            null != this.$b && new this.$b(this.c, b, a, c)
        }
    }
};

function oa(a, b, c, d) {
    this.a = [0, 0, 0];
    this.f = [0, 0, 0];
    this.tb = 1;
    this.cc = b;
    this.Jb = c;
    this.Da = d;
    this.ca = s.b.create();
    this.jb = s.b.create();
    this.hb = s.b.create();
    this.aa = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    this.Cc = [0, 0, 0, 0];
    this.B = !0
}
h = oa.prototype;
h.Ra = function(a) {
    this.a = a;
    this.B = !0
};
h.Qa = function(a) {
    this.f = a;
    this.B = !0
};
h.ja = function() {
    return [this.a[0], this.a[1], this.a[2]]
};
h.Cb = function() {
    return [this.f[0], this.f[1], this.f[2]]
};

function pa(a) {
    a.B && a.update();
    return a.ca
}

function qa(a) {
    a.B && a.update();
    return a.jb
}

function ra(a) {
    a.B && a.update();
    return a.hb
}

function sa(a, b) {
    a.B && a.update();
    s.b.Ja(a.ca, b, a.Cc);
    var c = s.J.length(a.Cc);
    return c < a.Jb ? Number.POSITIVE_INFINITY : a.jb[0] / c
}

function ta(a, b) {
    a.B && a.update();
    for (var c = [
            [b.g[0], b.g[1], b.g[2], 1],
            [b.g[0], b.g[1], b.m[2], 1],
            [b.g[0], b.m[1], b.g[2], 1],
            [b.g[0], b.m[1], b.m[2], 1],
            [b.m[0], b.g[1], b.g[2], 1],
            [b.m[0], b.g[1], b.m[2], 1],
            [b.m[0], b.m[1], b.g[2], 1],
            [b.m[0], b.m[1], b.m[2], 1]
        ], d = 0; 6 > d; d++) {
        for (var e = !0, f = 0; 8 > f; f++)
            if (0 <= s.Ub.Zb(a.aa[d], c[f])) {
                e = !1;
                break
            }
        if (e) return !1
    }
    return !0
}
h.update = function() {
    this.ca = s.b.create();
    s.b.multiply(s.Pa(1, s.Z(-this.f[2])), s.Pa(0, s.Z(-this.f[1] - 90)), this.ca);
    s.b.multiply(this.ca, s.Pa(2, s.Z(-this.f[0])), this.ca);
    s.b.multiply(this.ca, s.xa(-this.a[0], -this.a[1], -this.a[2]), this.ca);
    this.jb = s.md(this.cc, this.tb, this.Jb, this.Da);
    this.hb = s.b.create();
    s.b.multiply(this.jb, this.ca, this.hb);
    this.aa[0] = [0, 0, 1, 1];
    this.aa[1] = [0, 0, -1, 1];
    this.aa[2] = [1, 0, 0, 1];
    this.aa[3] = [-1, 0, 0, 1];
    this.aa[4] = [0, 1, 0, 1];
    this.aa[5] = [0, -1, 0, 1];
    var a = s.b.create();
    s.b.Ca(this.hb,
        a);
    for (var b = 0; 6 > b; b++) this.aa[b] = s.b.gb(a, this.aa[b]);
    this.B = !1
};
s.Ec = function(a, b, c, d, e, f) {
    var g = e.get(c);
    if (!g) return [d, c.k >= f];
    var k = x(a.o, c.k);
    d = (b[0] - c.n) / k;
    k = (b[1] - c.p) / k;
    d = s.na(d, 0, 0.9999);
    var k = s.na(k, 0, 0.9999),
        l = s.$,
        m = d * (l - 1),
        n = k * (l - 1),
        p = Math.floor(m),
        r = Math.floor(n),
        q = g.Q[r * l + p],
        t = g.Q[(r + 1) * l + p],
        m = m - p,
        q = q + (g.Q[r * l + p + 1] - q) * m,
        l = q + (t + (g.Q[(r + 1) * l + p + 1] - t) * m - q) * (n - r),
        n = 0,
        n = 0.5 > k ? 0.5 > d ? 0 : 1 : 0.5 > d ? 2 : 3;
    return !(g.T & 1 << n) || c.k >= f ? [l, !0] : s.Ec(a, b, N(c, n), l, e)
};
s.Va = function(a, b, c) {
    var d;
    null == d && (d = Number.MAX_VALUE);
    var f = s.Ec(a, b, a.o.A, 0, c, d);
    return f;
};
s.Fc = function(a, b, c, d, e, f) {
    var g = e.get(c);
    if (!g) return [d, c.k >= f];
    var k = x(a.o, c.k);
    d = (b[0] - c.n) / k;
    for (var k = (b[1] - c.p) / k, l = a.d, m = g.za(l.a, l.wc), n = 0, p = s.$, r = s.$ - 1, q = 0; 1 >= q; q++)
        for (var t = 0; 1 >= t; t++) {
            var v = [];
            s.b.Ja(m, [t, q, g.Q[q * r * p + t * r]], v);
            sa(l.h, v);
            v = g.va[q][t];
            v > n && (n = v)
        }
    l = 0;
    l = 0.5 > k ? 0.5 > d ? 0 : 1 : 0.5 > d ? 2 : 3;
    return !(g.T & 1 << l) || c.k >= f ? [n, !0] : s.Fc(a, b, N(c, l), n, e)
};
s.yd = function(a, b, c) {
    var d;
    null == d && (d = Number.MAX_VALUE);
    return s.Fc(a, b, a.o.A, 0, c, d)
};

function O(a, b) {
    this.K = a;
    this.D = null;
    this.q = b;
    this.Yb = null
}

function ua(a) {
    a.D = document.createElement("canvas");
    if (null != a.D && (a.D.width = a.q[0], a.D.height = a.q[1], a.D.style.display = "block", null != a.D.getContext)) {
        try {
            a.e = a.D.getContext("webgl") || a.D.getContext("experimental-webgl")
        } catch (b) {}
        a.e && (a.K.appendChild(a.D), a.e.Wb = a.D.width, a.e.Vb = a.D.height, a.e.clearColor(0, 0, 0, 1), a.e.enable(a.e.DEPTH_TEST), a.e.viewport(0, 0, a.e.Wb, a.e.Vb), a.e.clear(a.e.COLOR_BUFFER_BIT | a.e.DEPTH_BUFFER_BIT))
    }
}
O.prototype.resize = function(a, b) {
    this.q = a;
    null != this.D && !0 != b && (this.D.width = this.q[0], this.D.height = this.q[1]);
    null != this.e && (this.e.Wb = this.D.width, this.e.Vb = this.D.height)
};
O.prototype.clear = function() {
    this.e.clear(this.e.DEPTH_BUFFER_BIT);
    this.e.enable(this.e.CULL_FACE)
};
O.prototype.useProgram = function(a, b, c) {
    this.Yb != a && (this.e.useProgram(a.Y), this.Yb = a, va(a), b = a.getAttribute(b), this.e.enableVertexAttribArray(b), null != c && (a = a.getAttribute(c), this.e.enableVertexAttribArray(a)))
};
O.prototype.bindTexture = function(a) {
    !1 != a.Hb && (this.e.activeTexture(this.e.TEXTURE0), this.e.bindTexture(this.e.TEXTURE_2D, a.I))
};
s.Hd = function() {
    return !0
};

function P(a, b) {
    null != b ? a.e.bindFramebuffer(a.e.FRAMEBUFFER, b.dc) : (a.e.bindTexture(a.e.TEXTURE_2D, null), a.e.bindRenderbuffer(a.e.RENDERBUFFER, null), a.e.bindFramebuffer(a.e.FRAMEBUFFER, null))
};

function Q(a, b, c) {
    this.j = b.j;
    this.e = a.e;
    this.ab = c;
    a = this.e;
    null != a && (this.ya = this.ha = null, this.ha = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.ha), a.bufferData(a.ARRAY_BUFFER, new Float32Array(b.t), a.STATIC_DRAW), this.ha.Ha = 3, this.ha.Ka = b.t.length / 3, this.ya = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.ya), a.bufferData(a.ARRAY_BUFFER, new Float32Array(b.u), a.STATIC_DRAW), this.ya.Ha = 2, this.ya.Ka = b.u.length / 2, this.S = 4 * (b.t.length + b.u.length) + 32, this.Lb = this.ha.Ka / 3)
}
Q.prototype.w = function() {
    this.e.deleteBuffer(this.ha);
    this.e.deleteBuffer(this.ya)
};

function wa(a, b) {
    var c = a.e;
    if (null != c) {
        var d = b.getAttribute("aPosition"),
            e = b.getAttribute("aTexCoord");
        c.bindBuffer(c.ARRAY_BUFFER, a.ha);
        c.vertexAttribPointer(d, a.ha.Ha, c.FLOAT, !1, 0, 0);
        c.bindBuffer(c.ARRAY_BUFFER, a.ya);
        c.vertexAttribPointer(e, a.ya.Ha, c.FLOAT, !1, 0, 0);
        c.drawArrays(c.TRIANGLES, 0, a.ha.Ka)
    }
}
Q.prototype.size = function() {
    return this.S
};

function R(a, b, c) {
    this.e = a.e;
    this.Y = null;
    this.Rb = [];
    this.ub = [];
    this.createProgram(b, c)
}
R.prototype.createShader = function(a, b) {
    if (!a) return null;
    var c = this.e;
    if (null != c) {
        var d;
        d = !0 != b ? c.createShader(c.FRAGMENT_SHADER) : c.createShader(c.VERTEX_SHADER);
        c.shaderSource(d, a);
        c.compileShader(d);
        return c.getShaderParameter(d, c.COMPILE_STATUS) ? d : (alert("An error occurred compiling the shaders: " + c.getShaderInfoLog(d)), null)
    }
};
R.prototype.createProgram = function(a, b) {
    var c = this.e;
    if (null != c) {
        var d = this.createShader(a, !0),
            e = this.createShader(b, !1),
            f = c.createProgram();
        c.attachShader(f, d);
        c.attachShader(f, e);
        c.linkProgram(f);
        c.getProgramParameter(f, c.LINK_STATUS) || alert("Unable to initialize the shader program.");
        c.useProgram(f);
        this.Y = f
    }
};

function va(a) {
    var b = a.e;
    null != b && null != a.Y && (a = a.getUniform("uSampler"), null != a && b.uniform1i(a, 0))
}

function S(a, b, c) {
    var d = a.e;
    null != d && null != a.Y && (a = a.getUniform(b), null != a && d.uniformMatrix4fv(a, !1, c))
}

function T(a, b, c) {
    var d = a.e;
    null != d && null != a.Y && (a = a.getUniform(b), null != a && d.uniform1f(a, c))
}
R.prototype.getAttribute = function(a) {
    var b = this.e;
    if (null != b && null != this.Y) return null == this.ub[a] ? (b = b.getAttribLocation(this.Y, a), this.ub[a] = b) : this.ub[a]
};
R.prototype.getUniform = function(a) {
    var b = this.e;
    if (null != b && null != this.Y) return null == this.Rb[a] ? (b = b.getUniformLocation(this.Y, a), this.Rb[a] = b) : this.Rb[a]
};
s.xd = "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMVP;\nvarying vec2 vTexCoord;\nvoid main(){ \ngl_Position = uMVP * vec4(aPosition, 1.0);\nvTexCoord = aTexCoord;\n}";
s.wd = "precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nconst vec4 gray = vec4(0.125, 0.125, 0.125, 1.0);\nvoid main() {\nfloat fade = smoothstep(0.51, 0.55, vTexCoord.t);\ngl_FragColor = mix(texture2D(uSampler, vTexCoord), gray, fade);\n}";
s.bd = "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
s.$c = "precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(1, 1, 1, 1);\nvoid main() {\nvec4 gridColor = mix(texture2D(uSampler, vTexCoord1), texture2D(uSampler, vTexCoord2), uGridBlend);\ngl_FragColor = mix(fogColor, gridColor, vFogFactor);\n}";
s.Zc = "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nuniform mat4 uGridMat;\nuniform float uGridStep1, uGridStep2;\nconst int HMSize = 5;\nconst float HMSize1 = float(HMSize-1);\nuniform float uHeight[HMSize*HMSize];\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nfloat round(float x) { return floor(x + 0.5); }\nvoid main() {\nvec3 pos = aPosition;\nfloat z = uHeight[int(round(pos.y*HMSize1)*float(HMSize) + round(pos.x*HMSize1))];\nvec4 camSpacePos = uMV * vec4(pos.xy, z, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvec4 gridCoord = uGridMat * vec4(pos, 1.0);\nvTexCoord1 = aTexCoord;\nvTexCoord1 = gridCoord.xy * vec2(uGridStep1);\nvTexCoord2 = gridCoord.xy * vec2(uGridStep2);\n}";
s.Yc = "precision mediump float;\nuniform sampler2D uSampler;\nuniform float uGridBlend;\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying float vDepth;\nconst vec4 fogColor = vec4(1, 1, 1, 1);\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";
s.Cd = "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvFogFactor = exp(uFogDensity * camDist);\nvTexCoord = aTexCoord;\n}";
s.Bd = "precision mediump float;\nuniform sampler2D uSampler;\nvarying vec2 vTexCoord;\nvarying float vFogFactor;\nconst vec4 fogColor = vec4(1, 1, 1, 1);\nvoid main() {\ngl_FragColor = mix(fogColor, texture2D(uSampler, vTexCoord), vFogFactor);\n}";
s.Ad = "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMV, uProj;\nuniform float uFogDensity;\nvarying vec2 vTexCoord;\nvarying float vDepth;\nvoid main() {\nvec4 camSpacePos = uMV * vec4(aPosition, 1.0);\ngl_Position = uProj * camSpacePos;\nfloat camDist = length(camSpacePos.xyz);\nvDepth = camDist;\nvTexCoord = aTexCoord;\n}";
s.zd = "precision mediump float;\nuniform sampler2D uSampler;\nvarying float vDepth;\nvoid main() {\ngl_FragColor = fract(vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0) * vDepth) + (-0.5/255.0);\n}";
s.dd = "\nattribute vec4 aPosition;\nuniform mat4 uProjectionMatrix;\nuniform mat4 uData;\nuniform vec4 uColor;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nvoid main(void){\nint i=int(aPosition.x);\nif(i==0) gl_Position=uProjectionMatrix*vec4(floor(uData[0][0]+0.1),floor(uData[0][1]+0.1),0.0,1.0), vTexcoords=vec2(uData[0][2], uData[0][3]);\nif(i==1) gl_Position=uProjectionMatrix*vec4(floor(uData[1][0]+0.1),floor(uData[1][1]+0.1),0.0,1.0), vTexcoords=vec2(uData[1][2], uData[1][3]);\nif(i==2) gl_Position=uProjectionMatrix*vec4(floor(uData[2][0]+0.1),floor(uData[2][1]+0.1),0.0,1.0), vTexcoords=vec2(uData[2][2], uData[2][3]);\nif(i==3) gl_Position=uProjectionMatrix*vec4(floor(uData[3][0]+0.1),floor(uData[3][1]+0.1),0.0,1.0), vTexcoords=vec2(uData[3][2], uData[3][3]);\nvec4 c=uColor*(1.0/255.0);\nc.w*=1.0;\nvColor=c;\n}";
s.cd = "precision mediump float;\nvarying vec4 vColor;\nvarying vec2 vTexcoords;\nuniform sampler2D uSampler;\nvoid main(void){\nvec4 c=texture2D(uSampler, vec2(vTexcoords.x, 1.0-vTexcoords.y) );\nc*=vColor;\ngl_FragColor = c;\n}";

function U(a, b, c, d) {
    this.i = a;
    this.e = a.e;
    this.dc = this.I = null;
    this.S = 0;
    this.ab = d;
    this.H = null;
    this.Hb = !1;
    this.c = c;
    null != b && this.load(b)
}
U.prototype.w = function() {
    this.e.deleteTexture(this.I)
};
U.prototype.size = function() {
    return this.S
};

function xa(a, b, c, d, e, f) {
    var g = a.e;
    a.I = g.createTexture();
    g.bindTexture(g.TEXTURE_2D, a.I);
    f = !0 == f ? g.REPEAT : g.CLAMP_TO_EDGE;
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, f);
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, f);
    f = !1;
    switch (e) {
        case "linear":
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
            break;
        case "trilinear":
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_LINEAR);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER,
                g.LINEAR);
            f = !0;
            break;
        default:
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST)
    }
    g.pixelStorei(g.UNPACK_ALIGNMENT, 1);
    g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, b, c, 0, g.RGBA, g.UNSIGNED_BYTE, d);
    !0 == f && g.generateMipmap(g.TEXTURE_2D);
    g.bindTexture(g.TEXTURE_2D, null);
    a.S = b * c * 4;
    a.Hb = !0
}

function ya(a, b, c) {
    var d = a.e;
    a.I = d.createTexture();
    d.bindTexture(d.TEXTURE_2D, a.I);
    c = !0 == c ? d.REPEAT : d.CLAMP_TO_EDGE;
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, c);
    d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, c);
    c = !1;
    switch ("linear") {
        case "linear":
            d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR);
            d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.LINEAR);
            break;
        case "trilinear":
            d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR_MIPMAP_LINEAR);
            d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER,
                d.LINEAR);
            c = !0;
            break;
        default:
            d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST)
    }
    d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, b);
    !0 == c && d.generateMipmap(d.TEXTURE_2D);
    d.bindTexture(d.TEXTURE_2D, null);
    a.S = b.naturalWidth * b.naturalHeight * 4;
    a.Hb = !0
}
U.prototype.load = function(a, b, c) {
    this.H = new Image;
    this.H.crossOrigin = "anonymous";
    this.H.onload = function() {
        if (null == this.c || !0 != this.c.r) ya(this, this.H, !1), this.H = null
    }.bind(this);
    this.H.onerror = function() {
        null != this.c && !0 == this.c.r || null == c || c()
    }.bind(this);
    this.H.src = a
};
U.prototype.createFramebuffer = function(a, b) {
    if (null != this.I) {
        var c = this.e,
            d = c.createFramebuffer();
        c.bindFramebuffer(c.FRAMEBUFFER, d);
        d.width = a;
        d.height = b;
        c.bindTexture(c.TEXTURE_2D, this.I);
        var e = c.createRenderbuffer();
        c.bindRenderbuffer(c.RENDERBUFFER, e);
        c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, a, b);
        c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, this.I, 0);
        c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, e);
        c.bindTexture(c.TEXTURE_2D,
            null);
        c.bindRenderbuffer(c.RENDERBUFFER, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null);
        this.dc = d
    }
};

function za(a, b) {
    this.i = a;
    this.L = new Q(a, b.L);
    this.I = new U(a);
    ya(this.I, b.H);
    this.Ib = b.Ib;
    this.Fb = b.Fb
}
za.prototype.w = function() {
    this.L.w();
    this.I.w()
};
za.prototype.size = function() {
    return this.L.size() + this.I.size()
};

function Aa(a, b) {
    this.i = a;
    this.G = new ka(b)
}
Aa.prototype.get = function(a, b) {
    var c = this.G.find(a);
    if (c) return c;
    c = new za(this.i, b);
    la(this.G, a, c, c.size());
    return c
};
Aa.prototype.size = function() {
    return this.G.la
};
Aa.prototype.reset = function() {
    return this.G.clear()
};

function V() {
    this.t = [];
    this.u = [];
    this.j = new ia;
    this.ab = this.S = 0
}
V.prototype.w = function() {
    this.t = [];
    this.u = [];
    this.j = null
};
V.prototype.load = function(a, b, c) {
    s.lc(a, function(a) {
        this.ab = a.byteLength;
        for (var c = 0, f = 1 / 65535, g = "", k = 0; 8 > k; k++) g += String.fromCharCode(a.getUint8(c, !0)), c += 1;
        if ("BIN.MESH" == g && (k = a.getUint32(c, !0), c += 4, !(1 < k))) {
            for (k = 0; 3 > k; k++) this.j.g[k] = a.getFloat64(c, !0), c += 8;
            for (k = 0; 3 > k; k++) this.j.m[k] = a.getFloat64(c, !0), c += 8;
            for (var g = a.getUint16(c, !0), c = c + 2, l = Array(3 * g), m = 0; m < g; m++) k = 3 * m, l[k] = a.getUint16(c, !0), c += 2, l[k + 1] = a.getUint16(c, !0), c += 2, l[k + 2] = a.getUint16(c, !0), c += 2;
            for (var g = a.getUint16(c, !0), c = c + 2,
                    n = Array(2 * g), m = 0; m < g; m++) k = 2 * m, n[k] = a.getUint16(c, !0), c += 2, n[k + 1] = 65535 - a.getUint16(c, !0), c += 2;
            g = a.getUint16(c, !0);
            c += 2;
            this.t = Array(9 * g);
            this.u = Array(6 * g);
            for (m = 0; m < g; m++) {
                for (k = 0; 3 > k; k++) {
                    var p = 3 * a.getUint16(c, !0),
                        c = c + 2,
                        r = 9 * m + 3 * k;
                    this.t[r] = l[p] * f;
                    this.t[r + 1] = l[p + 1] * f;
                    this.t[r + 2] = l[p + 2] * f
                }
                for (k = 0; 3 > k; k++) p = 2 * a.getUint16(c, !0), c += 2, r = 6 * m + 2 * k, this.u[r] = n[p] * f, this.u[r + 1] = n[p + 1] * f
            }
            this.S = 8 * (this.t.length + this.u.length) + 56;
            null != b && b()
        }
    }.bind(this), function() {
        null != c && c()
    }.bind(this))
};
V.prototype.size = function() {
    return this.S
};
V.prototype.fileSize = function() {
    return this.ab
};
s.qb = function(a, b) {
    b *= Math.PI;
    a = 2 * a * Math.PI;
    return [Math.cos(a) * Math.sin(b) * 0.5 + 0.5, Math.sin(a) * Math.sin(b) * 0.5 + 0.5, 0.5 * Math.cos(b) + 0.5]
};
s.$ = 5;

function Ba(a, b, c) {
    this.c = a;
    this.j = new ia;
    this.va = [];
    this.Q = [];
    this.T = 0;
    this.Ta = [];
    for (a = 0; 2 > a; a++) this.va[a] = [];
    var d = c.pa.getInt16(c.v, !0);
    c.v += 2;
    a = c.pa.getInt16(c.v, !0);
    c.v += 2;
    this.j.g[0] = b.n;
    this.j.g[1] = b.p;
    this.j.g[2] = d;
    d = x(this.c.o, b.k);
    this.j.m[0] = b.n + d;
    this.j.m[1] = b.p + d;
    this.j.m[2] = a;
    for (a = 0; 2 > a; a++)
        for (b = 0; 2 > b; b++) this.va[a][b] = c.pa.getFloat32(c.v, !0), c.v += 4;
    a = 0;
    for (b = s.$ * s.$; a < b; a++) this.Q[a] = c.pa.getInt16(c.v, !0), c.v += 2;
    for (a = 0; 4 > a; a++) this.Ta[a] = null;
    this.T = 0
}
Ba.prototype.za = function(a, b) {
    var c = b;
    null != c ? (c[0] = M(this.j, 0), c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = M(this.j, 1), c[6] = 0, c[7] = 0, c[8] = 0, c[9] = 0, c[10] = 1, c[11] = 0, c[12] = this.j.g[0] - a[0], c[13] = this.j.g[1] - a[1], c[14] = 0, c[15] = 1) : (c = s.b.create(), s.b.multiply(s.xa(this.j.g[0] - a[0], this.j.g[1] - a[1], 0), s.pb(M(this.j, 0), M(this.j, 1), 1), c));
    return c
};
Ba.prototype.size = function() {
    for (var a = 308, b = 0; 4 > b; b++) null != this.Ta[b] && (a += this.Ta[b].size());
    return a
};

function Ca(a, b, c) {
    this.C = b;
    this.c = a;
    a = "";
    for (var d = 0; 8 > d; d++) a += String.fromCharCode(c.pa.getUint8(c.v, !0)), c.v += 1;
    "METATILE" == a && (a = c.pa.getUint32(c.v, !0), c.v += 4, 1 < a || (this.Hc = Da(this, b, c)))
}
Ca.prototype.w = function() {};

function Da(a, b, c) {
    var d = new Ba(a.c, b, c),
        e = c.pa.getUint8(c.v, !0);
    c.v += 1;
    for (var f = 0; 4 > f; f++) e & 1 << f + 4 && (d.Ta[f] = Da(a, N(b, f), c));
    d.T = e & 15;
    return d
}
Ca.prototype.size = function() {
    return this.Hc.size()
};
s.Kc = function(a, b, c, d) {
    this.c = a;
    this.C = b;
    this.Na = c;
    this.Ma = d;
    this.gd = function(b) {
        !0 != this.c.r && null != this.Na && (b = new Ca(a, this.C, {
            pa: b,
            v: 0
        }), this.Na(this.C, b))
    }.bind(this);
    this.fd = function() {
        !0 != this.c.r && null != this.Ma && this.Ma(this.C)
    }.bind(this);
    s.lc(ba(this.c.o, this.C), this.gd, this.fd)
};

function Ea(a, b, c, d, e) {
    this.c = a;
    this.M = new na(a, b, c, d, e);
    this.contains = this.M.contains.bind(this.M);
    this.trim = this.M.trim.bind(this.M);
    this.reset = this.M.reset.bind(this.M);
    this.Kb = this.M.Kb.bind(this.M);
    this.update = this.M.update.bind(this.M);
    this.size = this.M.size.bind(this.M)
}
Ea.prototype.get = function(a) {
    for (var b = a, c = this.c.o; Math.abs(b.k - c.qc) % c.pc && b.k > c.A.k;) b = b.parent();
    if (b = this.M.get(b)) {
        for (var c = new u(b.c, b.C.k, b.C.n, b.C.p), d = b.Hc; c.k < a.k;) {
            var e = x(b.c.o, c.k),
                f = c.n + e / 2,
                e = c.p + e / 2,
                g = 0;
            Math.round(a.n) >= Math.round(f) && (g |= 1, c.n = f);
            Math.round(a.p) >= Math.round(e) && (g |= 2, c.p = e);
            c.k++;
            (d = d.Ta[g]) || console.log("Missing tile metadata")
        }!c.isEqual(a) && console.log("Metatile inconsistency");
        a = d
    } else a = null;
    return a
};
s.Pb = 1.1;

function Fa(a, b, c) {
    this.c = a;
    this.Oa = this.xc = this.yc = null;
    this.K = b;
    this.uc = c;
    this.ta = this.r = !1;
    this.q = [b.clientWidth, b.clientHeight];
    this.Wa = !1;
    this.B = this.hc = !0;
    this.ed = 1;
    this.ma = this.s = this.c.l.s;
    this.V = 0.5 * this.c.l.V;
    this.i = new O(b, this.q);
    this.h = new oa(0, this.c.l.Xb, 20, this.c.l.Xa);
    this.a = [this.c.o.$a[0], this.c.o.$a[1], this.c.o.$a[2]];
    this.f = [this.c.o.Za[0], this.c.o.Za[1], this.c.o.Za[2]];
    this.O = new Ea(this.c, Number.MAX_VALUE, function() {
        this.B = !0
    }.bind(this), this.c.l.La, s.Kc);
    this.fa = new s.Lc(this.c, Number.MAX_VALUE,
        function() {
            this.B = !0
        }.bind(this), this.c.l.La, s.Mc);
    this.Db = new Aa(this.i, this.c.l.ec);
    this.wa = this.Sa = this.Fa = this.Ea = null;
    this.ad = !1;
    this.ra = null;
    this.Ga = this.c.l.ic;
    this.Tb = !0;
    this.kb = this.lb = this.zc = null;
    this.Jc = !0;
    this.Dc = document.getElementById("renderStats");
    this.ob = this.Ac = this.ka = this.Nb = this.Ob = this.rb = this.Ua = 0;
    this.Ba = [];
    this.mb = this.nb = 0;
    this.Gb = null;
    this.Bb = 0;
    this.bc = s.b.create();
    this.ac = s.b.create();
    this.Qc = [0, 0, 0];
    this.Rc = s.b.create();
    this.wc = s.b.create();
    this.Ic = s.b.create();
    this.qd = [0, 0, 0];
    this.pd = [
        [3, 1, 2, 0],
        [3, 2, 1, 0],
        [2, 3, 0, 1],
        [2, 0, 3, 1],
        [0, 2, 1, 3],
        [0, 1, 2, 3],
        [1, 0, 3, 2],
        [1, 3, 0, 2]
    ];
    this.eb = [0, 0, 100];
    this.Ia = null;
    window.addEventListener("resize", this.tc.bind(this), !1);
    ua(this.i);
    this.yc = new R(this.i, s.Cd, s.Bd);
    this.xc = new R(this.i, s.bd, s.$c);
    this.Oa = new R(this.i, s.xd, s.wd);
    this.od = new R(this.i, s.Ad, s.zd);
    this.nd = new R(this.i, s.Zc, s.Yc);
    new R(this.i, s.dd, s.cd);
    Ga(this);
    Ha(this);
    Ia(this);
    Ja(this);
    Ka(this, this.q[0], this.q[1]);
    window.Bc(this.update.bind(this))
}
h = Fa.prototype;
h.tc = function() {
    !0 != this.r && Ka(this, this.K.clientWidth, this.K.clientHeight)
};
h.w = function() {
    !0 != this.r && (this.r = !0, this.O.reset(), this.fa.reset(), this.Db.reset(), null != this.Ea && this.Ea.w(), null != this.Fa && this.Fa.w(), null != this.Sa && this.Sa.w(), null != this.wa && this.wa.w(), null != this.ra && this.ra.w(), this.K.removeChild(this.i.D))
};

function Ga(a) {
    var b = new V,
        c = s.$;
    c--;
    for (var d = 0; d < c; d++)
        for (var e = 0; e < c; e++) {
            var f = e / c,
                g = (e + 1) / c,
                k = d / c,
                l = (d + 1) / c;
            b.t.push(f, k, 0);
            b.t.push(g, k, 0);
            b.t.push(g, l, 0);
            b.u.push(f, k);
            b.u.push(g, k);
            b.u.push(g, l);
            b.t.push(g, l, 0);
            b.t.push(f, l, 0);
            b.t.push(f, k, 0);
            b.u.push(g, l);
            b.u.push(f, l);
            b.u.push(f, k)
        }
    b.j.g[0] = b.j.g[1] = b.j.g[2] = 0;
    b.j.m[0] = b.j.m[1] = b.j.m[2] = 1;
    b.S = 8 * (b.t.length + b.u.length) + 56;
    a.Ea = new Q(a.i, b);
    b = new Uint8Array(16384);
    for (c = 0; 64 > c; c++)
        for (d = 0; 64 > d; d++) e = 4 * (64 * c + d), 1 > c || 63 <= c || 1 > d || 63 <= d ? (b[e] =
            255, b[e + 1] = 255, b[e + 2] = 255) : (b[e] = 32, b[e + 1] = 32, b[e + 2] = 32), b[e + 3] = 255;
    a.Fa = new U(a.i);
    xa(a.Fa, 64, 64, b, "trilinear", !0)
}

function Ia(a) {
    var b = a.Ga,
        c = new Uint8Array(b * b * 4);
    a.ra = new U(a.i);
    xa(a.ra, b, b, c);
    a.ra.createFramebuffer(b, b);
    for (var b = 16, c = new Uint8Array(b * b * 4), d = 0; d < b; d++)
        for (var e = 0; e < b; e++) {
            var f = 4 * (d * b + e);
            c[f] = 255;
            c[f + 1] = 0;
            c[f + 2] = 0;
            c[f + 3] = 255
        }
    a.zc = new U(a.i);
    xa(a.zc, b, b, c)
}

function Ja(a) {
    var b = a.i.e;
    a.lb = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, a.lb);
    b.bufferData(b.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 0, 1, 2, 0, 0, 1, 3, 0, 0, 1]), b.STATIC_DRAW);
    a.lb.Ha = 4;
    a.lb.Ka = 4;
    a.kb = b.createBuffer();
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a.kb);
    b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), b.STATIC_DRAW);
    a.kb.Ha = 1;
    a.kb.Ka = 6
}

function Ha(a) {
    for (var b = new V, c = 0; 32 > c; c++)
        for (var d = 0; 64 > d; d++) {
            var e = b,
                f = d / 64,
                g = c / 32,
                k = (d + 1) / 64,
                l = (c + 1) / 32,
                m = s.qb(f, g),
                n = [f, g],
                p = s.qb(f, l),
                f = [f, l],
                r = s.qb(k, g),
                g = [k, g],
                q = s.qb(k, l),
                k = [k, l];
            e.t.push(p[0], p[1], p[2]);
            e.t.push(m[0], m[1], m[2]);
            e.t.push(r[0], r[1], r[2]);
            e.u.push(f[0], f[1]);
            e.u.push(n[0], n[1]);
            e.u.push(g[0], g[1]);
            e.t.push(r[0], r[1], r[2]);
            e.t.push(q[0], q[1], q[2]);
            e.t.push(p[0], p[1], p[2]);
            e.u.push(g[0], g[1]);
            e.u.push(k[0], k[1]);
            e.u.push(f[0], f[1]);
            e.S = 8 * (e.t.length + e.u.length) + 56
        }
    b.j.g[0] =
        b.j.g[1] = b.j.g[2] = 0;
    b.j.m[0] = b.j.m[1] = b.j.m[2] = 1;
    a.Sa = new Q(a.i, b);
    a.wa = new U(a.i, a.c.l.wa, a.c)
}

function Ka(a, b, c) {
    var d = a.h;
    d.tb = b / c;
    d.B = !0;
    a.q = [b, c];
    a.i.resize(a.q, void 0);
    La(a)
}

function Ma(a, b) {
    var c = Math.log(0.05) / (10 * a.c.l.Xa * (Math.max(5, -a.f[1]) / 90));
    T(b, "uFogDensity", c)
}

function Na(a, b, c, d) {
    null == a.Ba[b.k] ? a.Ba[b.k] = 1 : a.Ba[b.k] ++;
    if (null != a.Ia) {
        var e = x(a.c.o, b.k);
        a.Ia[0] > b.n && a.Ia[0] < b.n + e && a.Ia[1] > b.p && a.Ia[1] < b.p + e && console.log("tile-hit: easting:" + b.n + " norting: " + b.p + " lod: " + b.k)
    }
    if (c && !a.ad) a.nb += c.Ib, a.mb += c.Fb, d = a.Db.get(b, c), b = !0 == a.ta ? a.od : a.yc, a.i.useProgram(b, "aPosition", "aTexCoord"), e = a.bc, s.b.multiply(pa(a.h), c.za(a.a, a.Rc), e), c = qa(a.h), S(b, "uMV", e), S(b, "uProj", c), Ma(a, b), a.i.bindTexture(d.I), wa(d.L, b), !0 != a.ta && (a.Ob++, a.ka += d.L.Lb);
    else {
        b = !0 == a.ta ?
            a.nd : a.xc;
        a.i.useProgram(b, "aPosition", "aTexCoord");
        e = a.bc;
        s.b.multiply(pa(a.h), d.za(a.a, a.ac), e);
        S(b, "uMV", e);
        S(b, "uProj", qa(a.h));
        c = a.ac;
        d.za(fa(a.c.o, a.a, a.Qc), c);
        S(b, "uGridMat", c);
        Ma(a, b);
        c = a.c.l.fc;
        var e = a.c.l.gc,
            f = s.$,
            f = Math.log(a.h.a[2] - 0.25 * (d.Q[0] + d.Q[f - 1] + d.Q[(f - 1) * f] + d.Q[(f - 1) * f + f - 1]) + 20) / Math.log(c),
            g = Math.pow(c, Math.ceil(f)),
            k = f - Math.floor(f);
        T(b, "uGridStep1", e / Math.pow(c, Math.floor(f)));
        T(b, "uGridStep2", e / g);
        T(b, "uGridBlend", k);
        d = d.Q;
        c = b.e;
        null != c && null != b.Y && (e = b.getUniform("uHeight"),
            null != e && c.uniform1fv(e, d));
        a.i.bindTexture(a.Fa);
        wa(a.Ea, b);
        !0 != a.ta && (a.Nb++, a.ka += a.Ea.Lb)
    }
}

function Oa(a) {
    var b = s.b.create();
    s.b.multiply(s.pb(2, 2, 2), s.xa(-0.5, -0.5, -0.5), b);
    var c = s.b.create();
    s.b.multiply(s.xa(a.h.ja()[0], a.h.ja()[1], a.h.ja()[2] - 400), s.rd(0.9 * a.h.Da), c);
    var d = s.b.create();
    s.b.multiply(ra(a.h), c, d);
    s.b.multiply(d, b, d);
    a.i.useProgram(a.Oa, "aPosition", "aTexCoord");
    a.i.bindTexture(a.wa);
    va(a.Oa);
    S(a.Oa, "uMVP", d);
    wa(a.Sa, a.Oa);
    a.ka += a.Sa.Lb
}

function Pa(a, b) {
    for (var c = b.za(a.a, a.wc), d = a.q[0] / 2, e = 0, f = s.$, g = s.$ - 1, k = 0; 1 >= k; k++)
        for (var l = 0; 1 >= l; l++) {
            var m = [];
            s.b.Ja(c, [l, k, b.Q[k * g * f + l * g]], m);
            m = sa(a.h, m) * b.va[k][l] * d;
            m > e && (e = m)
        }
    return e
}

function Qa(a, b) {
    var c = a.O.get(b);
    if (!c || !ta(a.h, ja(c.j, a.a))) return 0;
    if (!(1E6 > c.va[0][0])) return Ra(a, b, c);
    var d = Pa(a, c);
    if (!c.T || d < s.Pb * a.ed) {
        var e = a.fa.get(b),
            f;
        if (!(f = e)) {
            a: {
                if (c.T)
                    for (f = 0; 4 > f; f++)
                        if (c.T & 1 << f && a.fa.contains(N(b, f))) {
                            f = !0;
                            break a
                        }
                f = !1
            }
            f = !f
        }
        f ? Na(a, b, e, c) : Ra(a, b, c);
        return d
    }
    if (d = 2.2 > d) a: {
        if (a.fa.contains(b) && 1E6 > c.va[0][0])
            for (d = 0; 4 > d; d++)
                if (c.T & 1 << d && (f = N(b, d), e = a.fa.get(f), f = a.O.get(f), !e || !f)) {
                    d = !0;
                    break a
                }
        d = !1
    }
    return d ? (e = a.fa.get(b), Na(a, b, e, c), 0) : Ra(a, b, c)
}

function Ra(a, b, c) {
    var d = a.pd,
        e;
    e = c.j;
    var f = a.qd;
    null != f ? (f[0] = 0.5 * (e.g[0] + e.m[0]), f[1] = 0.5 * (e.g[1] + e.m[1]), e = f) : e = [0.5 * (e.g[0] + e.m[0]), 0.5 * (e.g[1] + e.m[1]), 0.5 * (e.g[2] + e.m[2])];
    f = a.h.a;
    e = Math.floor((Math.atan2(a.a[1] + f[1] - e[1], a.a[0] + f[0] - e[0]) + Math.PI) / Math.PI * 4);
    e = s.na(e, 0, 7);
    for (var g = f = 0; 4 > g; g++) {
        var k = d[e][g];
        c.T & 1 << k && (f = Math.max(f, Qa(a, N(b, k))))
    }
    return f
}

function Sa(a, b) {
    var c = a.O.get(b);
    if (!c || !ta(a.h, ja(c.j, a.a))) return 0;
    if (1E6 > c.va[0][0]) {
        var d = Pa(a, c);
        if (!c.T || d < s.Pb) return d
    }
    for (var e = d = 0; 4 > e; e++) c.T & 1 << e && (d = Math.max(d, Sa(a, N(b, e))));
    return d
}

function W(a) {
    switch (a.c.l.U) {
        case "observer":
            a.f[1] = s.na(a.f[1], -90, 10);
            a.a[2] = s.na(a.a[2], 5, a.h.Da);
            s.b.multiply(s.Pa(2, s.Z(a.f[0])), s.Pa(0, s.Z(a.f[1])), a.Ic);
            var b = [0, -a.a[2], 0];
            s.b.Ja(a.Ic, b);
            b[2] += s.Va(a.c, a.a, a.O)[0];
            a.h.Ra(b);
            a.h.Qa(a.f);
            break;
        case "drone":
            a.f[1] = s.na(a.f[1], -90, 90);
            a.a[2] = s.na(a.a[2], 5, a.h.Da);
            b = a.h.a;
            a.h.Ra([0, 0, a.a[2] + s.Va(a.c, [a.a[0] + b[0], a.a[1] + b[1]], a.O)[0]]);
            a.h.Qa(a.f);
            break;
        case "manual":
            a.h.Ra([0, 0, a.a[2]]), a.h.Qa(a.f)
    }
    a.B = !0
}

function Z(a) {
    var b = a.h.a;
    return a.h.ja()[2] - s.Va(a.c, [a.a[0] + b[0], a.a[1] + b[1]], a.O)[0]
}

function Ta(a) {
    var b = a.h.ja();
    b[0] += a.a[0];
    b[1] += a.a[1];
    return b
}

function Ua(a) {
    if ("manual" == a.c.l.U) return !1;
    var b = Math.max(a.V, 20 / a.V * a.a[2] * 0.1),
        c = Z(a);
    if (c < b) {
        if (a.a[2] < b) {
            var d = function(a, c, e) {
                var f = 0.5 * (a + c);
                if (20 < e) return f;
                this.a[2] = f;
                W(this);
                return Z(this) < b ? d(a, f, e + 1) : d(f, c, e + 1)
            }.bind(a);
            a.a[2] = d(a.a[2] + 250, a.a[2], 0)
        } else {
            var e = function(a, c, d) {
                var f = 0.5 * (a + c);
                if (20 < d) return f;
                this.f[1] = f;
                W(this);
                return Z(this) < b ? e(a, f, d + 1) : e(f, c, d + 1)
            }.bind(a);
            a.f[1] = e(-89, Math.min(-1, a.f[1]), 0)
        }
        W(a)
    } else {
        var f = 0.5 * a.ma,
            f = Math.max(f, 20 / f * a.a[2] * 0.1);
        c >= f && (a.s = a.ma, a.V =
            0.5 * a.s)
    }
    return !1
}

function Va(a) {
    if ("manual" == a.c.l.U) return !1;
    var b = 1E3,
        c = 20,
        c = Math.max(20, 0.1 * a.a[2]);
    if (a.Wa || -10 < a.f[1]) {
        var d = function(a, b, g) {
            var k = 0.5 * (a + b);
            if (20 < g) return k;
            this.f[1] = k;
            W(this);
            return Z(this) < c ? d(a, k, g + 1) : d(k, b, g + 1)
        }.bind(a);
        Z(a) < c && (a.f[1] = d(-89, Math.min(-1, a.f[1]), 0), W(a))
    } else
        for (; Z(a) < c && 0 < b;) a.a[2] += 0.01, W(a), b--;
    return !1
}

function Wa(a) {
    var b = a.c.l;
    if ("manual" == b.U) return !1;
    switch (b.ia) {
        case "aboveTerrainOnly":
        case "aboveTerrainByPixelSize":
            return Ua(a);
        case "aboveTerrainOnlyOld":
            return Va(a);
        default:
            for (var c, b = !1, d = a.c.l, e = 1E3;
                (c > s.Pb || 0 > Z(a)) && 0 < e;) {
                b = !0;
                if ("observer" == d.U)
                    if (a.Wa || -10 < a.f[1]) 250 > a.a[2] ? a.a[2] += 0.3 : a.f[1] -= 0.3;
                    else {
                        var f = s.Z(a.f[0]),
                            g = s.Z(-a.f[1]);
                        c = 0.5 / Math.sin(g);
                        g = c * Math.cos(g);
                        f = [-Math.sin(f), Math.cos(f), 0];
                        a.a[0] += g * f[0];
                        a.a[1] += g * f[1];
                        a.a[2] += c
                    } else a.a[2] += 0.5;
                W(a);
                c = Sa(a, a.c.o.A);
                e--
            }
            return b
    }
}

function La(a, b) {
    a.ta = null != b ? b : !1;
    var c = a.c.l;
    if ("drone" == c.U && !a.hc) {
        var d = s.Va(a.c, a.a, a.O);
        if (!d[1]) return;
        a.a[2] += d[0];
        a.hc = !0
    }
    a.ma = a.s;
    "aboveTerrainByPixelSize" == c.ia ? a.ma = Math.min(s.yd(a.c, a.a, a.O)[0] / 0.1 * 180, c.s) : (a.s = a.c.l.s, a.V = a.c.l.V);
    var e = !1,
        d = a.c.l;
    if ("observer" == d.U) {
        if (a.a[2] < a.s) {
            a.a[2] = a.s;
            var e = s.Z(a.f[0]),
                f = s.Z(-a.f[1]),
                f = 0.5 / Math.sin(f) * Math.cos(f),
                e = [-Math.sin(e), Math.cos(e), 0];
            a.a[0] += f * e[0];
            a.a[1] += f * e[1];
            e = !0
        }
        a.a[2] > d.wb && (a.a[2] = d.wb, e = !0)
    }
    a.f[1] < d.yb && (a.f[1] = d.yb, e = !0);
    a.f[1] > d.xb && (a.f[1] = d.xb, e = !0);
    !0 == e && W(a);
    if ("aboveTerrainOnly" == c.ia || "aboveTerrainByPixelSize" == c.ia) Wa(a), a.i.clear(), W(a), Qa(a, a.c.o.A), !0 != a.ta && Oa(a);
    else {
        do a.i.clear(), W(a), Qa(a, a.c.o.A), !0 != a.ta && Oa(a); while (Wa(a))
    }
    a.O.trim(c.vb / 10);
    a.fa.trim(c.vb);
    a.Wa = !1
}
h.update = function() {
    if (!0 != this.r) {
        if (null == this.K || "hidden" != this.K.style.visibility) {
            this.q[0] == this.K.clientWidth && this.q[1] == this.K.clientHeight || this.tc();
            null != this.uc && this.uc();
            this.O.update();
            this.fa.update();
            if (!0 == this.Jc && (this.ka = this.Nb = this.Ob = 0, this.Ba = [], this.mb = this.nb = 0, this.Ua++, 10 <= this.Ua)) {
                var a = Date.now();
                null != this.Gb && (this.Bb = 0.5 * (1E3 / (a - this.Gb) * this.Ua + this.Bb));
                this.Gb = a
            }
            a = performance.now();
            "aboveTerrainByPixelSize" == this.c.l.ia && (0.5 < Math.abs(this.ma - this.s) ? (this.s =
                this.ma > this.s ? this.s + 0.5 : this.s - 0.5, this.V = 0.5 * this.s, W(this), console.log("minDistance: " + this.s)) : (this.s = this.ma, this.V = 0.5 * this.s));
            if (!0 == this.B) {
                var b = this.i;
                b.e.viewport(0, 0, b.e.Wb, b.e.Vb);
                La(this)
            }
            if (!0 == this.Jc && (this.rb++, this.ob += performance.now() - a, 100 <= this.rb && (this.Ac = this.ob / this.rb, this.rb = this.ob = 0), null != this.Dc && 10 <= this.Ua && (this.Ua = 0, !0 == this.B))) {
                var a = "Redered tiles: " + (this.Ob + this.Nb) + "<br/>Tile cache: " + Math.round(this.fa.size() / 1048576) + "MB<br/>Metatile cache: " + Math.round(this.O.size() /
                        1048576) + "MB<br/>GPU cache: " + Math.round(this.Db.size() / 1048576) + "MB<br/>Polygons: " + this.ka + "<br/>Render time: " + Math.round(1E3 * this.Ac) + "<br/>FPS: " + Math.round(this.Bb) + "<br/>Texture files size: " + Math.round(this.mb / 1048576) + "MB<br/>Mesh files size: " + Math.round(this.nb / 1048576) + "MB<br/>",
                    b = "LODs tiles:<br/>",
                    c;
                for (c in this.Ba) b += "LOD" + c + ": " + this.Ba[c] + "<br/>";
                this.Dc.innerHTML = "<table style='width:305px;font-size:12px;'><tr style='vertical-align:top;'><td>" + a + "</td><td>" + b + "</td></tr></table>"
            }
            this.B = !1
        }
        window.Bc(this.update.bind(this))
    }
};
h.Mb = function(a) {
    var b = ra(this.h),
        c = this.h.ja(),
        d = Ta(this),
        e = [0, 0, 0, 1],
        e = s.b.gb(b, [a[0] - d[0] + c[0], a[1] - d[1] + c[1], a[2] - d[2] + c[2], 1]);
    return 0 != e[3] ? (a = [0, 0, 0], a[0] = 0.5 * (e[0] / e[3] + 1) * this.q[0], a[1] = 0.5 * (-(e[1] / e[3]) + 1) * this.q[1], a[2] = e[2] / e[3], a) : [0, 0, 0]
};
h.bb = function(a, b) {
    if (null == this.h) return [0, 0, 1];
    var c = [2 * a / this.q[0] - 1, 1 - 2 * b / this.q[1], 1],
        d = [c[0], c[1], -1, 1],
        e = s.b.create(),
        e = s.b.inverse(qa(this.h)),
        c = [0, 0, 0, 0];
    s.b.gb(e, d, c);
    c[2] = -1;
    c[3] = 0;
    d = s.b.create();
    d = s.b.inverse(pa(this.h));
    e = [0, 0, 0, 0];
    s.b.gb(d, c, e);
    return e = s.J.normalize([e[0], e[1], e[2]])
};
h.Eb = function(a, b) {
    this.Tb = !0;
    var c = this.i.e;
    if (!0 == this.Tb) {
        var d = this.Ga;
        P(this.i, this.ra);
        var e = [this.q[0], this.q[1]],
            f = d,
            g = d;
        c.clearColor(1, 1, 1, 1);
        c.enable(c.DEPTH_TEST);
        c.viewport(0, 0, d, d);
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        this.q = [f, g];
        La(this, !0);
        f = e[0];
        g = e[1];
        c.clearColor(0, 0, 0, 1);
        P(this.i, null);
        d = this.h;
        d.tb = f / g;
        d.B = !0;
        this.q = [f, g];
        this.i.resize(this.q, !0);
        this.Tb = !1
    }
    if (c.checkFramebufferStatus(c.FRAMEBUFFER) != c.FRAMEBUFFER_COMPLETE) return [0, 0, 0, 0];
    g = f = 0;
    f = Math.floor(this.Ga /
        this.q[0] * a);
    g = Math.floor(this.Ga / this.q[1] * b);
    c = this.ra;
    g = this.Ga - g - 1;
    null != c.I ? (c.i.bindTexture(c), P(c.i, c), d = c.e, e = new Uint8Array(4), d.readPixels(f, g, 1, 1, d.RGBA, d.UNSIGNED_BYTE, e), P(c.i, null), f = e) : f = void 0;
    c = 1 / 255 * f[0] + f[1] + 255 * f[2] + 65025 * f[3];
    f = !(255 == f[0] && 255 == f[1] && 255 == f[2] && 255 == f[3]);
    g = this.bb(a, b);
    d = Ta(this);
    this.eb = [d[0] + g[0] * c, d[1] + g[1] * c, d[2] + g[2] * c];
    return [this.eb[0], this.eb[1], this.eb[2], f]
};

function Xa(a, b, c, d) {
    this.c = a;
    this.C = b;
    this.L = c;
    this.H = d;
    this.S = this.L.size() + d.naturalWidth * d.naturalHeight * 3;
    this.Ib = c.fileSize();
    this.Fb = d.naturalWidth * d.naturalHeight * 3
}
Xa.prototype.w = function() {
    null != this.L && (this.L.w(), this.L = null);
    this.H = null
};
Xa.prototype.za = function(a, b) {
    var c = x(this.c.o, this.C.k),
        d = c / 2 + this.C.n - a[0],
        c = c / 2 + this.C.p - a[1],
        e = this.L.j,
        f = b;
    null != f ? (f[0] = M(e, 0), f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = M(e, 1), f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = M(e, 2), f[11] = 0, f[12] = e.g[0] + d, f[13] = e.g[1] + c, f[14] = e.g[2], f[15] = 1) : (f = s.b.create(), s.b.multiply(s.xa(e.g[0] + d, e.g[1] + c, e.g[2]), s.pb(M(e, 0), M(e, 1), M(e, 2)), f));
    return f
};
Xa.prototype.size = function() {
    return this.S
};
s.Lc = na;
s.Mc = function(a, b, c, d) {
    this.c = a;
    this.C = b;
    this.Na = c;
    this.Ma = d;
    this.zb = this.kc = this.nc = !1;
    this.Ya = function() {
        !0 == this.zb ? null != this.Ma && this.Ma(this.C) : !0 == this.nc && !0 == this.kc && null != this.Na && this.Na(this.C, new Xa(this.c, this.C, this.L, this.H))
    }.bind(this);
    this.H = new Image;
    this.H.onload = function() {
        !0 != this.c.r && (this.kc = !0, this.Ya())
    }.bind(this);
    this.H.onerror = function() {
        !0 != this.c.r && (this.zb = !0, this.Ya())
    }.bind(this);
    this.H.crossOrigin = "anonymous";
    this.H.src = ea(this.c.o, this.C);
    this.L = new V;
    this.jd =
        function() {
            !0 != this.c.r && (this.nc = !0, this.Ya())
        }.bind(this);
    this.hd = function() {
        !0 != this.c.r && (this.zb = !0, this.Ya())
    }.bind(this);
    this.L.load(da(this.c.o, this.C), this.jd, this.hd)
};

function u(a, b, c, d) {
    this.c = a;
    this.k = null != b ? b : 0;
    this.n = null != c ? c : 0;
    this.p = null != d ? d : 0
}

function N(a, b) {
    var c = x(a.c.o, a.k),
        d = a.n + c / 2,
        c = a.p + c / 2;
    switch (b) {
        case 0:
            return new u(a.c, a.k + 1, a.n, a.p);
        case 1:
            return new u(a.c, a.k + 1, d, a.p);
        case 2:
            return new u(a.c, a.k + 1, a.n, c);
        case 3:
            return new u(a.c, a.k + 1, d, c)
    }
}
u.prototype.parent = function() {
    var a = x(this.c.o, this.k),
        b = this.c.o.A;
    return new u(this.c, this.k - 1, b.n + ((this.n - b.n) / a & -2) * a, b.p + ((this.p - b.p) / a & -2) * a)
};
u.prototype.isEqual = function(a) {
    return this.k == a.k && this.n == a.n && this.p == a.p
};

function $(a, b, c, d, e) {
    this.P = [];
    this.F = [];
    this.W = [];
    this.Sb = this.l = this.o = this.d = null;
    this.r = !1;
    this.K = null;
    "string" === typeof a ? this.K = document.getElementById(a) : "object" === typeof a && (this.K = a);
    null == this.K ? null != d && d(!1, "DOM element does not exist") : null != b && Ya(this, b, c, d, e)
}

function Ya(a, b, c, d, e) {
    if (null == b || "" == b) null != d && d(!1, "Map config does not exist");
    else {
        var f = "";
        "string" === typeof b && (f = b.split("?")[0].split("/").slice(0, -1).join("/") + "/");
        var g = null,
            k = null,
            l = function() {
                null == g || null == k && null != c || (this.o = new aa(this, g, f), this.l = new ha(k), this.Sb = e, null != this.d && (this.d.w(), this.d = null), this.d = new Fa(this, this.K, this.kd.bind(this)), null != d && d(!0))
            }.bind(a),
            m = function(a) {
                g = a;
                l()
            }.bind(a),
            n = function(a) {
                k = a;
                l()
            }.bind(a),
            p = function(a) {
                null != d && d(!1, a + " config not found")
            }.bind(a);
        null != c && "string" === typeof c && s.mc(c, n, p.bind(a, "browser"));
        "string" === typeof b && s.mc(b, m, p.bind(a, "map"));
        "object" === typeof b && (g = b);
        "object" === typeof c && (k = c);
        null == g && null == k || l()
    }
}
h = $.prototype;
h.w = function() {
    this.d.w();
    this.r = !0
};
h.ud = function(a) {
    if (!0 != this.r && null != this.d && null != this.d.h && this.l.U != a) {
        if ("manual" == a) {
            var b = s.Ld(this.d.a[0], this.d.a[1]);
            b[0] > this.d.a[2] && (this.d.a[2] = b[0] + 100)
        }
        this.l.U = a;
        W(this.d);
        this.P = [];
        this.W = [];
        this.F = []
    }
};
h.Vc = function() {
    return this.l.U
};
h.Ra = function(a, b, c) {
    !0 != this.r && null != this.d && (this.d.a = [a, b, c], W(this.d))
};
h.ja = function() {
    return !0 == this.r || null == this.d ? [0, 0, 0] : [this.d.a[0], this.d.a[1], this.d.a[2]]
};
h.Qa = function(a, b, c) {
    !0 != this.r && null != this.d && (this.d.f = [a, b, c], W(this.d))
};
h.Cb = function() {
    return !0 == this.r || null == this.d ? [0, 0, 0] : this.d.f
};
h.sd = function(a, b) {
    if (null != this.d && null != this.d.h) {
        var c = this.d.h;
        c.cc = a;
        c.Jb = 20;
        c.Da = b;
        c.B = !0;
        W(this.d)
    }
};
h.td = function(a) {
    !0 != this.r && null != this.d && null != this.d.h && (this.l.ia = a, W(this.d))
};
h.Uc = function() {
    return this.l.ia
};
h.Eb = function(a, b) {
    return null == this.d ? [0, 0, 0, !1] : this.d.Eb(a, b, "all")
};
h.Mb = function(a, b, c) {
    return null == this.d ? [0, 0, 0] : this.d.Mb([a, b, c])
};
h.Gd = function() {
    return [
        [0, 0],
        [1, 0],
        [0, 1]
    ]
};
h.bb = function(a, b) {
    if (null == this.d) return [0, 0, 0, !1];
    var c = this.bb(a, b);
    return [Ta(this), c]
};
h.Wc = function(a, b) {
    console.log(this);
    if(!0 != this.r && null != this.d){
     return s.Va(
      this.c,
      [a, b],
      this.d.O
     );
    }
};
h.ld = function(a, b) {
    if (!0 != this.r && null != this.d) {
        var c = Z(this.d) / 800;
        a *= c;
        b *= c;
        var d = s.Z(this.Cb()[0]),
            c = [-Math.sin(d), Math.cos(d)],
            d = [Math.cos(d), Math.sin(d)];
        this.d.a[0] += c[0] * b - d[0] * a;
        this.d.a[1] += c[1] * b - d[1] * a;
        0 < this.l.oa[0] && this.P.push([c[0] * b - d[0] * a, c[1] * b - d[1] * a]);
        W(this.d)
    }
};
h.rotate = function(a, b, c) {
    !0 != this.r && null != this.d && (null == c && (c = 0), this.d.f[0] += 0.3 * -a, this.d.f[1] += 0.3 * -b, this.d.f[2] += 0.3 * c, 0 < this.l.oa[1] && this.F.push([0.3 * -a, 0.3 * -b, 0.3 * c]), this.d.Wa = !0, W(this.d))
};
h.zoom = function(a) {
    !0 != this.r && null != this.d && (a = 1 + 0.001 * a, this.d.a[2] *= a, 0 < this.l.oa[2] && this.W.push([a]), W(this.d))
};
h.kd = function() {
    if (!0 != this.r && null != this.d) {
        var a = !1,
            b = this.l.oa[0],
            c = this.l.oa[1],
            d = this.l.oa[2];
        0 < this.F.length && 0 == this.P.length && 0 == this.W.length && (this.d.Wa = !0);
        for (var e = 0; e < this.P.length; e++) this.P[e][0] *= b, this.P[e][1] *= b, this.d.a[0] += this.P[e][0], this.d.a[1] += this.P[e][1], 0.01 > Math.abs(this.P[e][0]) + Math.abs(this.P[e][1]) && (this.P.splice(e, 1), e--), a = !0;
        for (e = 0; e < this.W.length; e++) this.W[e][0] += (1 - this.W[e][0]) * (1 - d), this.d.a[2] *= this.W[e][0], this.d.a[2] = Math.min(this.d.a[2], 4E5), 0.001 > Math.abs(1 -
            this.W[e][0]) && (this.W.splice(e, 1), e--), a = !0;
        for (e = 0; e < this.F.length; e++) this.F[e][0] *= c, this.F[e][1] *= c, this.F[e][2] *= c, this.d.f[0] += this.F[e][0], this.d.f[1] += this.F[e][1], this.d.f[2] += this.F[e][2], 0.01 > Math.abs(this.F[e][0]) + Math.abs(this.F[e][1]) + Math.abs(this.F[e][2]) && (this.F.splice(e, 1), e--), a = !0;
        !0 == a && W(this.d);
        null != this.Sb && this.Sb()
    }
};
s.Oc = function() {
    var a = document.createElement("canvas");
    if (null == a) return !1;
    a.width = 1024;
    a.height = 768;
    if (null == a.getContext) return !1;
    var b = null;
    try {
        b = a.getContext("webgl") || a.getContext("experimental-webgl")
    } catch (c) {
        return !1
    }
    return b ? !0 : !1
};
s.Browser = $;
$.prototype.setControlMode = $.prototype.ud;
$.prototype.getControlMode = $.prototype.Vc;
$.prototype.setPosition = $.prototype.Ra;
$.prototype.getPosition = $.prototype.ja;
$.prototype.setOrientation = $.prototype.Qa;
$.prototype.getOrientation = $.prototype.Cb;
$.prototype.setCamera = $.prototype.sd;
$.prototype.setCameraConstrainMode = $.prototype.td;
$.prototype.getCameraConstrainMode = $.prototype.Uc;
$.prototype.hitTest = $.prototype.Eb;
$.prototype.project = $.prototype.Mb;
$.prototype.getScreenRay = $.prototype.bb;
$.prototype.getTerrainHeight = $.prototype.Wc;
$.prototype.visibleArea = $.prototype.Gd;
$.prototype.pan = $.prototype.ld;
$.prototype.rotate = $.prototype.rotate;
$.prototype.zoom = $.prototype.zoom;
$.prototype.kill = $.prototype.w;
s.checkSupport = s.Oc;
