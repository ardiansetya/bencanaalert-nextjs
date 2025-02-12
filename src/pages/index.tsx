"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="px-4 py-6 max-w-2xl mx-auto text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Laporan Bencana Alam</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="disasterType">Jenis Bencana</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih jenis bencana" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flood">Banjir</SelectItem>
                <SelectItem value="earthquake">Gempa Bumi</SelectItem>
                <SelectItem value="landslide">Tanah Longsor</SelectItem>
                <SelectItem value="tsunami">Tsunami</SelectItem>
                <SelectItem value="volcano">Letusan Gunung Berapi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Lokasi</Label>
            <Input
              id="location"
              name="location"
              placeholder="Masukkan lokasi bencana"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Tanggal</Label>
              <Input id="date" name="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Waktu</Label>
              <Input id="time" name="time" type="time" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Jelaskan situasi bencana"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reporterName">Nama Pelapor</Label>
            <Input
              id="reporterName"
              name="reporterName"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactInfo">Informasi Kontak</Label>
            <Input
              id="contactInfo"
              name="contactInfo"
              placeholder="Nomor telepon atau email"
            />
          </div>

          <div className="flex justify-end items-end">
            <Button type="submit" className="">
              Kirim Laporan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
