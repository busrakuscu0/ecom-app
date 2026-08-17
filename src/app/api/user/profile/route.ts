// app/api/user/profile/route.ts
import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    // 1. GÜVENLİK: İsteği yapan kullanıcıyı Auth0 üzerinden doğrula
    const session = await getSession();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Kullanıcının Auth0'daki benzersiz ID'si (Bunu veritabanında eşleştirmek için kullanacağız)
    const auth0UserId = session.user.sub;

    // 2. İstemciden (formdan) gelen verileri oku
    const body = await request.json();
    const { firstName, lastName, address, city, phone } = body;

    // 3. VERİTABANI İŞLEMİ (Database Operation)
    // -------------------------------------------------------------
    // BURAYA KENDİ VERİTABANI KODUNU YAZACAKSIN.
    // Örnek (Eğer Prisma ORM kullanıyorsan şöyle görünürdü):
    /*
      await prisma.user.update({
        where: { auth0Id: auth0UserId },
        data: {
          firstName,
          lastName,
          address,
          city,
          phone,
        },
      });
    */
    // -------------------------------------------------------------

    // 4. İşlem başarılı yanıtı dön
    return NextResponse.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
